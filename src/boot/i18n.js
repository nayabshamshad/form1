import { createI18n } from "vue-i18n";
import messages from "src/i18n";

let translator;
export default ({ app }) => {
  // Create I18n instance
  const i18n = createI18n({
    locale: "en-US",
    legacy: false,
    globalInjection: true,
    messages,
  });
  translator = i18n;
  app.use(i18n);
};

export { translator };
