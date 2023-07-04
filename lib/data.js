import { HOST_URL } from "@/config";

const getProject = async slug => {
  try {
    const response = await fetch(`${HOST_URL}/api/projects/1`, {
      method: "GET",
      cache: "no-store"
    });
    return response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchProject = async () => {
  try {
    const response = await fetch(`${HOST_URL}/api/projects`, {
      method: "GET",
      cache: "no-store"
    });
    return response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export async function getPostBySlug(slug) {
  const projects = await getProject(slug);
  return projects;
}

export async function getPorojects() {
  const projects = await fetchProject();
  return projects || [];
}
