import Author from "@/components/author";
import Container from "@/components/container";
import Posts from "@/components/homelist";
import Link from "next/link";

export default async function Post({ posts }) {
  return (
    <>
      <Author />
      <Posts posts={posts} />
      <Container>
        {/* <div className="prose mx-auto mt-6 text-center dark:prose-invert">
          <p>
            <Link href="/projects">View all projects</Link>
          </p>
        </div> */}
        <div className="mb-7 mt-7 flex justify-center">
          <Link
            href="/projects"
            className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
            View all projects →
          </Link>
        </div>
      </Container>
    </>
  );
}
