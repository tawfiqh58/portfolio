import Container from "@/components/container";

export default function Footer() {
  const props = { copyright: "Tawfiq Hasan" };
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
    </Container>
  );
}
