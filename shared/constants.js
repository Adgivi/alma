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

const SOCIAL_NETWORKS = locale => [WIKILOC(locale), INSTAGRAM];

export { POST_LOCALIZED_FORMAT, EMAIL, SOCIAL_NETWORKS };
