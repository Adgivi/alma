const POST_LOCALIZED_FORMAT = "LL";

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

const SOCIAL_NETWORKS_BRAND = locale => [WIKILOC(locale), INSTAGRAM];
const SOCIAL_NETWORKS_SHARING = [WHATSAPP, FACEBOOK];

const SHARING_NETWORKS = [
  {
    network: "email",
    name: "Email",
    icon: "far fah fa-lg fa-envelope",
    color: "#333333"
  },
  {
    network: "facebook",
    name: "Facebook",
    icon: "fab fah fa-lg fa-facebook-f",
    color: "#1877f2"
  },
  {
    network: "linkedin",
    name: "LinkedIn",
    icon: "fab fah fa-lg fa-linkedin",
    color: "#007bb5"
  },
  {
    network: "reddit",
    name: "Reddit",
    icon: "fab fah fa-lg fa-reddit-alien",
    color: "#ff4500"
  },
  {
    network: "telegram",
    name: "Telegram",
    icon: "fab fah fa-lg fa-telegram-plane",
    color: "#0088cc"
  },
  {
    network: "twitter",
    name: "Twitter",
    icon: "fab fah fa-lg fa-twitter",
    color: "#1da1f2"
  },
  {
    network: "whatsapp",
    name: "Whatsapp",
    icon: "fab fah fa-lg fa-whatsapp",
    color: "#25d366"
  },
  {
    network: "yammer",
    name: "Yammer",
    icon: "fab fah fa-lg fa-yammer",
    color: "#0072c6"
  }
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
  POST_LOCALIZED_FORMAT,
  EMAIL,
  SOCIAL_NETWORKS_BRAND,
  SOCIAL_NETWORKS_SHARING,
  BREAKPOINTS
};
