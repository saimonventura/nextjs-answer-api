// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  i18n: {
    locales: ["en-US", "de-DE"],
    defaultLocale: "en-US",
  },
});
