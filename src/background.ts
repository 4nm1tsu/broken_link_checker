chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const message = {
      type: "back",
      color: "#F00",
    };

    if (tabs.length && tabs[0].id && tabs[0].status === "complete") {
      chrome.tabs
        .sendMessage(tabs[0].id, message)
        .then((response) => {
          console.log("send message from background.js succeeded.");
        })
        .catch((error) => {
          console.log(`send message from background.js failed: ${error}`);
        });
    } else {
      console.log("tab status is not completed.");
    }
  });
});
