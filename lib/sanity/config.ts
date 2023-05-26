export const useCdn = process.env.NODE_ENV === "production";
// export const useCdn = false;

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID;

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || ("production" as string);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-25";

export const previewSecretId = process.env
  .SANITY_REVALIDATE_SECRET as string;
