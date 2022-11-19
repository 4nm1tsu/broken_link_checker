chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      if (tab.id) {
        let message = {
          type: "back",
        };

        chrome.tabs
          .sendMessage(tab.id, message)
          .then((response) => {
            console.log("send message from background.js succeeded.");
          })
          .catch((error) => {
            console.error(`send message from background.js failed: ${error}`);
          });
      } else {
        console.log("tab status is not completed.");
      }
    });
  }
});
