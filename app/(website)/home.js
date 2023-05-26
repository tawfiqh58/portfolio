import Author from "@/components/author";
import Posts from "@/components/homelist";

// import Archive from "./archive/archive";
// import { getPaginatedPosts } from "@/lib/sanity/client";
// const POSTS_PER_PAGE = 6;

export default async function Post({ posts }) {
  // const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return (
    <>
      <Author />
      {/* <Archive posts={posts} /> */}
      <Posts posts={posts} />
    </>
  );
}
