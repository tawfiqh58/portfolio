import HomePage from "./home";
import { sampleData } from "@/utils/sample";
export default async function IndexPage() {
  const posts = [sampleData, sampleData, sampleData, sampleData];

  return <HomePage posts={posts} />;
}
