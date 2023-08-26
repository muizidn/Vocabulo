export enum Language {
    CHINESE = "Chinese",
    JAPANESE = "Japanese",
    ARABIC = "Arabic",
    CYRILLIC = "Cyrillic",
    HINDI = "Hindi",
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
        case Language.HINDI: // Add Hindi regex
            return /[\u0900-\u097F]/;
        default:
            return /./; // Match any character for "Other"
    }
}

export function detectLanguage(text: string): Language {
    const languages = Object.values(Language);

    for (const language of languages) {
        const regex = getRegexForLanguage(language);
        if (regex.test(text)) {
            return language;
        }
    }

    return Language.OTHER;
}