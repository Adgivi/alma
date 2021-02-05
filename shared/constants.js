const POST_LOCALIZED_FORMAT = "LL";

// DOMAIN
const BASE_URL_PROD = "https://www.unculciclista.com";

// SOCIAL
const EMAIL = "unculciclista@gmail.com";

const INSTAGRAM = {
  name: "instagram",
  url: "https://www.instagram.com/unculciclista/"
};
const WIKILOC = locale => ({
  name: "wikiloc",
  icon: false,
  label: "Wikiloc",
  url: `https://${locale}.wikiloc.com/wikiloc/user.do?id=8015718`
});
const FACEBOOK = {
  name: "facebook",
  icon: "facebook-f",
  color: "#1877f2"
};
const WHATSAPP = {
  name: "whatsapp",
  icon: "whatsapp",
  color: "#25d366"
};
const TELEGRAM = {
  name: "telegram",
  icon: "telegram",
  color: "#0088cc"
};
const TWITTER = {
  name: "twitter",
  icon: "twitter",
  color: "#1da1f2"
};
const EMAIL_SHARING = {
  name: "email",
  icon: { type: "fas", name: "envelope" },
  color: "#333333"
};

const SOCIAL_NETWORKS_BRAND = locale => [WIKILOC(locale), INSTAGRAM];
const SOCIAL_NETWORKS_SHARING = [
  WHATSAPP,
  FACEBOOK,
  TELEGRAM,
  TWITTER,
  EMAIL_SHARING
];

const BREAKPOINTS = {
  MOBILE_PORTRAIT: 480,
  MOBILE_LANDSCAPE: 812,
  TABLET_PORTRAIT: 834,
  TABLET_LANDSCAPE: 1112,
  LAPTOP: 1680,
  DESKTOP: 1920
};

export {
  BASE_URL_PROD,
  POST_LOCALIZED_FORMAT,
  EMAIL,
  SOCIAL_NETWORKS_BRAND,
  SOCIAL_NETWORKS_SHARING,
  BREAKPOINTS
};
