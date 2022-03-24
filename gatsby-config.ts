import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-react-helmet"]
};

export default config;
