import es from "dayjs/locale/es";
import ca from "dayjs/locale/ca";

const langs = { es, ca };

export default function({ app, store }) {
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {};

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.$dayjs.locale(langs[newLocale]);
    store.dispatch("getPosts");
  };
}
