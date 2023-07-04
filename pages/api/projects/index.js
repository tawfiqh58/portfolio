import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Authorization"
    );
    res.status(200).end();
  } else {
    const { method } = req;
    console.log(method);
    switch (method) {
      case "GET":
        return getProjects(req, res);
      case "POST":
        return createProject(req, res);
      case "PUT":
        return updateProject(req, res);
      default:
        return res.status(405).end();
    }
  }
}

async function getProjects(req, res) {
  const projects = await prisma.project.findMany({
    include: {
      mainImage: true,
      slug: true,
      categories: true
    }
  });
  res.status(200).json(projects);
}

async function createProject(req, res) {
  try {
    const { mainImage, slug, categories, title, body, excerpt } =
      req.body;

    const createdProject = await prisma.project.create({
      data: {
        title,
        body,
        excerpt,
        mainImage: {
          create: mainImage
        },
        slug: {
          create: slug
        },
        categories: {
          create: categories
        },
        publishedAt: new Date(),
        createdAt: new Date()
      }
    });

    res.status(201).json(createdProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateProject(req, res) {
  const { id } = req.body;

  const projectExists = await prisma.project.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      mainImage: true,
      slug: true,
      categories: true
    }
  });

  if (!projectExists) {
    return res.status(404).json({ error: "Project not found" });
  }

  const { mainImage, slug, categories, title, body, excerpt } =
    req.body;

  const [newItems, removedItems, modifiedItems] =
    validateCategoryData(projectExists.categories, categories);
  const updateModel = {
    title,
    body,
    excerpt,
    mainImage: {
      update: {
        src: mainImage.src,
        small: mainImage.small,
        alt: mainImage.alt
      }
    },
    slug: {
      update: {
        current: slug.current
      }
    },
    categories: {
      updateMany: modifiedItems.map(category => ({
        where: { id: category.id },
        data: { slug: category.slug }
      }))
    },
    publishedAt: new Date()
  };

  const updatedProject = await prisma.project.update({
    where: {
      id: parseInt(id)
    },
    data: updateModel,
    include: {
      mainImage: true,
      slug: true,
      categories: true
    }
  });

  for (const category of removedItems) {
    await prisma.category.delete({
      where: {
        id: category.id
      }
    });
  }

  for (const category of newItems) {
    await prisma.category.create({
      data: { ...category, projectId: id }
    });
  }

  res.status(200).json(updatedProject);
}

const validateCategoryData = (oldArray, newArray) => {
  const newItems = newArray.filter(item => !item.id);
  const removedItems = oldArray.filter(
    oldItem => !newArray.some(newItem => newItem.id === oldItem.id)
  );
  const modifiedItems = newArray.filter(newItem =>
    oldArray.some(
      oldItem =>
        oldItem.id === newItem.id && oldItem.slug !== newItem.slug
    )
  );
  return [newItems, removedItems, modifiedItems];
};
