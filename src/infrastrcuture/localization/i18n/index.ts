import I18n from "react-native-i18n"
const en = require("../../../translations/en")
const ar = require("../../../translations/ar")
I18n.fallbacks = true;

I18n.translations = {
    en: en,
    ar: ar,
};

export default I18n