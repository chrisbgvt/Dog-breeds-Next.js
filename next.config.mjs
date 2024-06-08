/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/breeds",
            permanent: true,
          },
        ];
    },
    images: {
        domains: ['images.dog.ceo'],
    },
};

export default nextConfig;
