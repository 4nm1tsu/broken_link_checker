chrome.runtime.onMessage.addListener((msg, sender, callback) => {
  switch (msg.type) {
    case "color":
      console.log("color");
      console.log("Receive color = " + msg.color);
      document.body.style.backgroundColor = msg.color;
      callback("Change color to " + msg.color);
      break;
    case "back":
      console.log("back");
      document.body.style.backgroundColor = msg.color;
      callback("Change color to " + msg.color);
      break;
    default:
      callback("unknown.");
      break;
  }
});
