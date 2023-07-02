import Author from "@/components/author";
import Posts from "@/components/homelist";

export default async function Post({ posts }) {
  return (
    <>
      <Author />
      <Posts posts={posts} />
    </>
  );
}
