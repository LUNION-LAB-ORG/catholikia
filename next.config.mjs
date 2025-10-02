import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**",
      },
      {
        hostname: "finance.christaxel.me",
        port: "",
        pathname: "/**",
      },
      new URL("https://ui-avatars.com/**"),
    ],
  },
};

export default withNextIntl(nextConfig);
