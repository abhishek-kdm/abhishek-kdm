/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: { styledComponents: true },
    webpack: (config) => ({
        ...config,
        resolve: {
            ...config?.resolve,
            alias: {
                ...config?.resolve.alias,
                "@": require("path").resolve(__dirname, "src"),
            }
        }
    })
};
