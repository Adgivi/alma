import dotenv from "dotenv";
import { BASE_URL_PROD } from "./settings/constants";
dotenv.config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

export default {
  dev: process.env.NODE_ENV !== "production",
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_description || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // { name: "robots", content: "all" }, TODO deploy: uncomment
      {
        hid: "description",
        property: "description",
        content: "Cycling adventures blog"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Cycling adventures blog"
      },
      // TODO deploy: fill the url & uncomment
      {
        hid: "og:url",
        property: "og:url",
        content: BASE_URL_PROD
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Molle:400i|Baloo+Paaji+2:400,500&display=swap"
      },
      { rel: "stylesheet", href: "https://use.typekit.net/uet8luc.css" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/css/global.scss"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/contentful",
    "~/plugins/posts",
    { src: "~/plugins/i18n.js" },
    { src: "~/plugins/dayjs.js" }
  ],
  /*
   ** Environment variables
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },
  modules: [
    "@nuxtjs/markdownit",
    "@nuxtjs/style-resources",
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "ca", name: "Valencià", label: "En valencià" },
          { code: "es", name: "Castellano", label: "En castellano" }
        ],
        defaultLocale: "ca",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true
        }
      }
    ],
    "@nuxtjs/dayjs",
    [
      "@nuxtjs/fontawesome",
      {
        icons: {
          solid: ["faHome", "faEnvelope"],
          regular: ["faEnvelope"],
          // light: [],
          // duotone: [ ... ],
          brands: [
            "faInstagram",
            "faFacebookF",
            "faWhatsapp",
            "faTelegram",
            "faTwitter"
          ]
        }
      }
    ],
    "vue-social-sharing/nuxt",
    "@nuxtjs/google-analytics"
  ],
  googleAnalytics: {
    id: "UA-189270284-2",
    dev: process.env.NODE_ENV !== "production"
  },
  markdownit: {
    injected: true
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost"
        })
      ]).then(([blogEntries]) => {
        return [
          ...blogEntries.items.map(entry => entry.fields.slug),
          ...blogEntries.items.map(entry => `es/${entry.fields.slug}`)
        ];
      });
    }
  },
  build: {
    extend: config => {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"]
      });
    }
  },
  styleResources: {
    scss: ["~/css/variables.scss"]
  }
};
