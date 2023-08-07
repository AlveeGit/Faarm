// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const client = createClient({
//   projectId: "plhqihsv",
//   dataset: "production",
//   apiVersion: "2023-08-07",
//   useCdn: true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);


import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "plhqihsv",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
