import { Language, detectLanguage } from "./language";

export function languageDetector(): Language {
    for (const text in getLanguageInformation()) {
        return detectLanguage(text)
    }
    return Language.OTHER;
}

function getLanguageInformation(): string[] {
    const metaTitle = document.querySelector('meta[property="og:title"]');
    const titleElement = document.querySelector('title');
    const metaDescription = document.querySelector('meta[name="description"]');

    const title = (metaTitle ? metaTitle.getAttribute('content') : titleElement?.textContent) || '';
    const description = (metaDescription ? metaDescription.getAttribute('content') : null) || '';

    return [title, description].filter((e) => e.length > 0);
}