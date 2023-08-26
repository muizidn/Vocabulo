import TranslatorService from "./TranslatorService";

const translationDict: { [id: string]: (translatedText: string) => void } = {};
var isTranslated = false;
const service = new TranslatorService();

export default function translateBody() {
    if (isTranslated) { return;}
    traverseElements(document.body);
    isTranslated = true
}

function traverseElements(element: HTMLElement): void {
    if (element.tagName.toLowerCase() === 'script') {
        return;
    }
    if (element.innerHTML === undefined || element.innerHTML === '') {
        return;
    }
    if (element.innerHTML.match(/[\u4e00-\u9fa5]/) && element.children.length === 0) {
        prepareElementForTranslation(element);
    } else {
        for (let i = 0; i < element.children.length; i++) {
            traverseElements(element.children[i] as HTMLElement);
        }
        // replaceChineseTextWithEnglish(element);
    }
}

function wrapWithTranslation(text: string, translatedText: string): string {
    return `
<div style="display: flex; flex-direction: column;">
  <div>${text}</div>
  <div style="color: black; font-size: 8pt; padding: 5px;">${translatedText}</div>
</div>
`;
}

async function prepareElementForTranslation(element: HTMLElement): Promise<void> {
    const id = self.crypto.randomUUID();
    translationDict[id] = (translatedText) => {
        element.innerHTML = wrapWithTranslation(element.innerHTML, translatedText);
    };
    const translated = await translateChineseToEnglishOne(element.innerHTML);
    console.log(typeof translationDict, typeof translationDict[id], id);
    translationDict[id](translated);
}

async function translateChineseToEnglishOne(chineseText: string): Promise<string> {
    return service.translate(chineseText);
}