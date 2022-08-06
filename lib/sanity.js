import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'fttdycys',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-08-04',
    token: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);