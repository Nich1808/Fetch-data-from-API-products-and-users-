import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };




const nextConfig: NextConfig = {
  /* config options here */
   images: {
        remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;

// export default withFlowbiteReact(nextConfig);
