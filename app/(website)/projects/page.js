import Archive from "./project";

const POSTS_PER_PAGE = 6;

async function getPaginatedPosts(count) {
  return [];
}

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Archive posts={posts} />;
}

// export const revalidate = 60;
