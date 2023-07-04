"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type AuthorType = {
  name: string;
};
export default function Author() {
  const router = useRouter();
  const author: AuthorType = { name: "Tawfiq Hasan " };
  const [btnStr, setBtnStr] = useState("Free to work!");

  const handleClick = () => {
    console.log("hire me!");
    router.push("/contact");
  };
  const hoveEnter = () => {
    setBtnStr("Hire me!");
  };
  const hoveLeave = () => {
    setBtnStr("Free to work!");
  };

  return (
    <div className="mb-8 mt-8 flex flex-col items-center justify-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full">
        <Image
          src={"/img/tawfiq.jpg"}
          alt={author.name}
          fill
          sizes="(max-width: 320px) 100vw, 320px"
          className="object-cover"
        />
      </div>
      <h1 className="text-brand-primary mt-4 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
        Tawfiq Hasan
      </h1>
      <div className="mx-auto mt-4 flex max-w-xl flex-col px-5 text-center text-gray-500">
        <p>
          Full Stack Developer and DevOps Enthusiast having more than
          5 years of experience on building web application and mobile
          apps. A Team Lead at TheDeveloperX, specialized in cloud
          infrastructure, software architecture and automation at
          scale.
        </p>
      </div>
      {/* <button
        onMouseEnter={hoveEnter}
        onMouseLeave={hoveLeave}
        onClick={handleClick}
        className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white"
      >
        {btnStr}
        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button> */}
      <button
        onClick={handleClick}
        onMouseEnter={hoveEnter}
        onMouseLeave={hoveLeave}
        className="group relative mt-4 h-11 w-40 overflow-hidden rounded-3xl bg-white text-lg font-bold shadow">
        <div className="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">
          {btnStr}
        </span>
      </button>
    </div>
  );
}
