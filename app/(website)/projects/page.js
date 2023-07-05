import Archive from "./project";
import { getPorojects } from "@/lib/data";

export default async function ArchivePage() {
  const posts = await getPorojects();
  return <Archive posts={posts} />;
}

// export const revalidate = 60;
