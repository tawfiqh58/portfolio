import HomePage from "./home";
// import { getPorojects } from "@/lib/data";

export default async function IndexPage() {
  // const posts = await getPorojects();
  return <HomePage posts={[]} />;
}
