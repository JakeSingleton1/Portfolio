import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // GitHub Pages requires static export - set explicitly to avoid injection errors
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
