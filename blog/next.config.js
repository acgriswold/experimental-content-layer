const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true, 
    experimental: {
        // https://stackoverflow.com/questions/75571651/using-remark-and-rehype-plugins-with-nextjs-13/75571708#75571708
    }
}

module.exports = withContentlayer(nextConfig)
