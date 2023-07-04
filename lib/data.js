const getProject = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/projects/1",
      {
        method: "GET",
        cache: "no-store"
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchProject = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/projects",
      {
        method: "GET",
        cache: "no-store"
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export async function getPostBySlug(id) {
  const projects = await getProject(id);
  return projects;
}

export async function getPorojects() {
  const projects = await fetchProject();
  return projects || [];
}
