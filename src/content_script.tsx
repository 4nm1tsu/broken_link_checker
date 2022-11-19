function getAllLinkInCurrentTab() {
  let links = [];
  const a = document.getElementsByTagName("a");
  for (let index = 0; index < a.length; index++) {
    links[index] = a.item(index);
  }
  //window.alert(links.length);
  return links;
}

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
      console.log(getAllLinkInCurrentTab().at(0)?.href);
      const linkList = getAllLinkInCurrentTab();
      //window.alert(linkList.length);
      linkList.filter((item) => {
        item?.href;
      });
      for (let index = 0; index < linkList.length; index++) {
        if (linkList[index]) {
          fetch(linkList[index]!.href, {
            method: "HEAD",
            mode: "cors",
          })
            .then((response) => {
              if (response.status == 404) {
                linkList[index]!.style.backgroundColor = "#ffa8a8";
                linkList[index]!.style.textDecoration = "line-through";
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
      break;
    default:
      callback("unknown type.");
      break;
  }
});
