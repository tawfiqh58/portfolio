import Contact from "./contact";

export default async function ContactPage() {
  const settings = {
    phone: "+8801780860535",
    email: "tawfiqhasan58@gmail.com"
  };
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
