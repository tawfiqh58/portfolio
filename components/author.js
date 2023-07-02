'use client';
import Image from "next/image";

export default function Author() {
  const author = {};

  const handleClick = e => {
    console.log("hire me!");
  };

  return (
    <div class="mb-8 mt-16 flex flex-col items-center justify-center">
      <div class="relative h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={"/img/tawfiq.jpg"}
          alt={author.name || "Tawfiq Hasan "}
          fill
          sizes="(max-width: 320px) 100vw, 320px"
          className="object-cover"
        />
      </div>
      <h1 class="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
        Tawfiq Hasan
      </h1>
      <div class="mx-auto mt-2 flex max-w-xl flex-col px-5 text-center text-gray-500">
        <p>
          Full Stack Developer, DevOps Enthusiast and a Certified IPE
          Engineer having more than 5 years of experience on building
          web application and mobile apps. A Team Lead at
          TheDeveloperX, specialized in cloud infrastructure, software
          architecture and automation at scale.
        </p>
      </div>
      <button
        onClick={handleClick}
        class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
        Hire me!
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
      {/* <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">
          Hover me!
        </span>
      </button> */}
    </div>
  );
}
