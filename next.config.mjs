import { withContentlayer } from "next-contentlayer";

// const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	// experimental: {
	// 	appDir: true,
	// 	mdxRs: true,
	// },
	webpack: (config) => {
        config.infrastructureLogging = {
            level: "error",
        };

        return config;
    },
};

export default withContentlayer(nextConfig);

// module.exports = withContentlayer(nextConfig);



