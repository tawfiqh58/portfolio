import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default async function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}