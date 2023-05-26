import Container from "@/components/container";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made using{" "}
          <a
            href="https://nextjs.org/"
            rel="noopener"
            target="_blank">
            NextJS
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://www.sanity.io/"
            rel="noopener"
            target="_blank">
            Sanity
          </a>
        </span>
      </div>
    </Container>
  );
}
