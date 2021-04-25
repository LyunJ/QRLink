let linkList = document.getElementById("url-list");

(async function drawLinkList() {
  let links = await chrome.tabs.query({});
  console.log(links);
  links.forEach(({ favIconUrl, url }) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");

    a.href = url;
    const textNode = document.createTextNode(url);
    a.appendChild(textNode);

    img.src = favIconUrl;

    div.appendChild(img);
    div.appendChild(a);
    linkList.appendChild(div);
  });
})();
