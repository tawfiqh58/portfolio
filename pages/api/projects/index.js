import prisma from "../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

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
  console.log(req.body);
  const projectId = uuidv4();

  try {
    const {
      mainImage,
      slug,
      categories,
      title,
      body,
      excerpt,
      publishedAt,
      createdAt
    } = req.body;

    const createdProject = await prisma.project.create({
      data: {
        projectId: projectId,
        mainImage: {
          create: mainImage
        },
        slug: {
          create: {
            current: slug.current,
            projectId: projectId
          }
        },
        categories: {
          create: categories.map(category => ({
            slug: {
              create: {
                current: category.slug.current,
                projectId: projectId
              }
            }
          }))
        },
        title,
        body,
        excerpt,
        publishedAt: new Date(publishedAt),
        createdAt: new Date(createdAt)
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
    }
  });

  if (!projectExists) {
    return res.status(404).json({ error: "Project not found" });
  }
  delete req.body.id;
  const project = await prisma.project.update({
    where: {
      id: parseInt(id)
    },
    data: req.body
  });
  res.status(200).json(project);
}
