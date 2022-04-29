import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient(
    {
        projectId:'y4tyw9bt',
        dataset:'production',
        apiVersion:'2022-04-24',
        useCdn:true,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN

    }
);

const builder = imageUrlBuilder(client);

//callback function
export const urlFor = (source) => builder.image(source);