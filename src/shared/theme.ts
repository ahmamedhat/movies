import { LanguageCode } from './constants'
export class Font {
    static FONT_1 = ""
    static FONT_2 = ""

    static getFontForLang = (lang: LanguageCode) => {
        return lang === LanguageCode.EN ? Font.FONT_1 : Font.FONT_2
    }
}

export class Color {
    static PRIMARY_COLOR = "red"
    static SECOUNDARY_COLOR = "blue"
}