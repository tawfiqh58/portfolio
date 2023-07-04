import axios from "axios";
import { HOST_URL } from "@/config";

// Maybe nextjs executes this url on the build time
const getProject = async id => {
  try {
    const res = await axios.get(`${HOST_URL}/api/projects/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchProject = async () => {
  try {
    const res = await axios.get(`${HOST_URL}/api/projects`);
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
