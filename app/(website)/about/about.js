import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  const author = authors[1];
  const imageProps = urlForImage(author?.image) || null;

  return (
    <Container>
      <h1 className="text-brand-primary mb-2 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Me
      </h1>
      <div className="text-center">
        <p className="text-lg">
          I am a passionate developer and great leader.
        </p>
      </div>

      <div className="mb-6 mt-5">
        <div class="relative m-auto h-60 w-60">
          <Image
            src={"/img/tawfiq.jpg"}
            alt={author.name || "Tawfiq Hasan "}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="prose mx-auto mt-6 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
