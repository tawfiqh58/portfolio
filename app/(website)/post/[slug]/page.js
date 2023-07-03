import PostPage from "./default";
import { getPostBySlug } from "@/lib/data";

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
