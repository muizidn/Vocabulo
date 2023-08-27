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

function wrapWithTranslation(text: string, translatedText: string): string {
    return `
  <span class="original-text">${text}</span>
  <span class="translation-text">${translatedText}</span>
`;
}

async function prepareNodeForTranslation(node: Node): Promise<void> {
    if (node instanceof Element && node.classList.contains('original-text')) {
        return;
    }
    
    const id = self.crypto.randomUUID();
    translationDict[id] = (translatedText) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = wrapWithTranslation(node.nodeValue || '', translatedText);
        wrapper.classList.add('translation-container');
        if (node.parentNode) {
            node.parentNode.replaceChild(wrapper, node);
        }
    };
    const translated = await translateChineseToEnglishOne(node.nodeValue || '');
    translationDict[id](translated);
}


async function translateChineseToEnglishOne(chineseText: string): Promise<string> {
    return service.translate(chineseText);
}
