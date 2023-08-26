export enum Language {
    CHINESE = "Chinese",
    JAPANESE = "Japanese",
    ARABIC = "Arabic",
    CYRILLIC = "Cyrillic",
    OTHER = "Other"
}

export function getRegexForLanguage(language: Language): RegExp {
    switch (language) {
        case Language.CHINESE:
            return /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/g;
        case Language.JAPANESE:
            return /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\p{Script=Common}]/u;
        case Language.ARABIC:
            return /[\u0600-\u06FF]/;
        case Language.CYRILLIC:
            return /[\u0400-\u04FF]/;
        default:
            return /./; // Match any character for "Other"
    }
}