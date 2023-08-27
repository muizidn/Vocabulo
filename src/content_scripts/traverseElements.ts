import TranslatorService from "./TranslatorService";
import { Language, isShouldTranslate } from "./language";

const translationDict: { [id: string]: (translatedText: string) => void } = {};
const service = new TranslatorService();

export default function traverseElements(element: HTMLElement, language: Language): void {
    traverseNode(element, language);
}

// traverse this node and its children, if return false then skip next children
// need unit test
function traverseNode(node: Node, language: Language): boolean {
    if (node.nodeName.toLowerCase() === 'script') { return false; }
    if (node.nodeName.toLowerCase() === 'code') { return false; }

    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue?.trim();
        if (text && isShouldTranslate(text)) {
            prepareNodeForTranslation(node);
            return false;
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            if (!traverseNode(node.childNodes[i], language)) {
                continue;
            }
        }
    } else {
        console.log("textNode", node.nodeType);
    }
    return false;
}

async function prepareNodeForTranslation(node: Node): Promise<void> {
    if (node instanceof Element && node.classList.contains('original-text-container')) {
        return;
    }

    const id = self.crypto.randomUUID();
    translationDict[id] = (translatedText) => {
        const originalText = document.createElement('span');
        originalText.classList.add('original-text-value');
        originalText.textContent = node.nodeValue;

        const translatedSpan = document.createElement('span');
        translatedSpan.classList.add('translated-text');
        translatedSpan.textContent = translatedText;

        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('translation-wrapper');

        const parent = node.parentElement;
        if (parent) {
            parent.classList.add('original-text-container');
            let rect = parent.getBoundingClientRect();
            // console.log("node for",
            //     parent.offsetLeft,
            //     parent.offsetTop,
            //     rect,
            //     node.nodeValue,
            //     node.nodeType,
            //     node.nodeName,
            //     node.previousSibling?.nodeName,
            //     parent.nodeType,
            //     parent.nodeName
            // )
            wrapperDiv.style.width = 'fit-content';
            wrapperDiv.style.maxWidth = `${rect.width}px`;

            wrapperDiv.appendChild(translatedSpan);

            parent.insertBefore(wrapperDiv, node.nextSibling);
            parent.replaceChild(originalText, node)
        }
    };
    const translated = await translateChineseToEnglishOne(node.parentElement?.textContent || '');
    translationDict[id](translated);
}


async function translateChineseToEnglishOne(chineseText: string): Promise<string> {
    return service.translate(chineseText);
}
