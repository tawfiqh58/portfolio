import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function PostAlt({
  post,
  aspect,
  preloadImage,
  featured = false
}) {
  const imageProps = post?.mainImage || null;
  const AuthorimageProps = post?.author?.image || null;
  return (
    <>
      <div
        className={cx(
          "group grid cursor-pointer content-start gap-3",
          featured && " lg:grid-cols-2 lg:gap-10"
        )}>
        <div
          className={cx(
            "relative overflow-hidden rounded-md bg-gray-100 transition-all dark:bg-gray-800",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}>
          <Link href={`/projects/minimal/${post.id}`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(post.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.mainImage.blurDataURL
                })}
                alt={post.mainImage.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover transition-all"
                fill
                sizes="80vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div
          className={cx(
            "flex flex-col justify-center",
            !featured && "lg:mt-5"
          )}>
          <div
            className={cx(
              "flex items-center space-x-3 text-gray-500 dark:text-gray-400"
            )}>
            <time
              className="text-sm"
              dateTime={post?.publishedAt || post._createdAt}>
              {format(
                parseISO(post?.publishedAt || post._createdAt),
                "MMMM dd, yyyy"
              )}
            </time>
          </div>

          <h2
            className={cx(
              "text-brand-primary mt-2 line-clamp-2 text-xl font-semibold tracking-normal dark:text-white",
              featured ? "lg:text-3xl" : "lg:text-2xl"
            )}>
            <Link href={`/projects/minimal/${post.id}`}>
              <span
                className="bg-gradient-to-r from-black to-black bg-[length:0px_2px] bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_2px]
        group-hover:bg-[length:100%_2px]
        dark:from-white dark:to-white">
                {post.title}
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
