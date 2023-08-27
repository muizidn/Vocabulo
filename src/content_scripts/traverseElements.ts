import TranslatorService from "./TranslatorService";
import { Language, isShouldTranslate } from "./language";

const translationDict: { [id: string]: (translatedText: string) => void } = {};
const service = new TranslatorService();

export default function traverseElements(element: HTMLElement, language: Language): void {
    traverseNode(element, language);
}

function traverseNode(node: Node, language: Language): void {
    if (node.nodeName.toLowerCase() === 'script') { return; }
    if (node.nodeName.toLowerCase() === 'code') { return; }

    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue?.trim();
        if (text && isShouldTranslate(text)) {
            prepareNodeForTranslation(node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            traverseNode(node.childNodes[i], language);
        }
    } else {
        console.log("textNode", node.nodeType);
    }
}

async function prepareNodeForTranslation(node: Node): Promise<void> {
    if (node instanceof Element && node.classList.contains('original-text')) {
        return;
    }

    const id = self.crypto.randomUUID();
    translationDict[id] = (translatedText) => {
        const translatedSpan = document.createElement('span');
        translatedSpan.classList.add('translated-text');
        translatedSpan.textContent = translatedText;

        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('translation-wrapper');

        (node as HTMLElement).onscroll = () => {
            let rect = (node as HTMLElement).getBoundingClientRect();
            let x = rect.left;
            let y = rect.top;
            translatedSpan.style.left = `${x}px`;
            translatedSpan.style.top = `${y}px`;
            translatedSpan.style.width = `${rect.width}px`;
            translatedSpan.style.height = `${rect.height}px`;
        };

        wrapperDiv.appendChild(translatedSpan);
        node.parentNode?.insertBefore(wrapperDiv, node.nextSibling);
    };
    const translated = await translateChineseToEnglishOne(node.nodeValue || '');
    translationDict[id](translated);
}


async function translateChineseToEnglishOne(chineseText: string): Promise<string> {
    return service.translate(chineseText);
}
