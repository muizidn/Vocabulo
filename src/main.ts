const button = document.getElementById("read-content") as HTMLButtonElement;
const resultDiv = document.getElementById("result-div")!;
const result = document.getElementById("result")!;

button.addEventListener("click", function () {
    button.textContent = "Loading...";
    getPageTitle()
});

function getPageTitle() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];

        function printTitle() {
            const title = document.title;
            const resultStr = "doc title: " + title;
            console.log(resultStr);

            (async () => {
                const response = await chrome.runtime.sendMessage({ info: resultStr });
                console.log(response);
            })();
        }

        chrome.scripting.executeScript({
            target: { tabId: activeTab.id! },
            func: printTitle,
        }).then(() => console.log('Injected a function!'));
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const senderTab = sender.tab;
    const resp = request.info;

    if (resp) {
        const resultElement = document.getElementById("result");
        if (resultElement) {
            resultElement.innerText = resp;
            sendResponse({ farewell: "thanks for sending! goodbye " + senderTab?.title });
        }
    }
});
