/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '172.20.10.2',
          port: '8000',
          pathname: '/media/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  