document.getElementById('read-content')?.addEventListener('click', () => {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];

        // Function to print the title and send a message to the extension
        function printTitle() {
            const title = document.title;
            const resultStr = "doc title: " + title;
            console.log(resultStr);

            // Send a message to the extension using async/await
            (async () => {
                const response = await chrome.runtime.sendMessage({ info: resultStr });
                console.log(response);
            })();
        }

        chrome.scripting.executeScript({
            target: { tabId: activeTab.id! },
            func: printTitle,
            // files: ['contentScript.js'],  // To call external file instead
        }).then(() => console.log('Injected a function!'));
    });
});

// Listener for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const senderTab = sender.tab;
    const resp = request.info;

    // Check if response exists and update the result element
    if (resp) {
        const resultElement = document.getElementById("result");
        if (resultElement) {
            resultElement.innerText = resp;
            sendResponse({ farewell: "thanks for sending! goodbye " + senderTab?.title });
        }
    }
});
