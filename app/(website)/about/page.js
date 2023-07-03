import About from "./about";

export default async function AboutPage() {
  const authors = [];
  return <About authors={authors} />;
}

// export const revalidate = 60;
