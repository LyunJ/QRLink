window.onload = function () {
  chrome.identity.getAuthToken({ interactive: true }, function (token) {
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message);
      return;
    }
    var x = new XMLHttpRequest();
    x.open(
      "GET",
      "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" +
        token
    );
    x.onload = function () {
      chrome.runtime.sendMessage({
        command: "addUserInfo",
        data: JSON.parse(x.response),
      });
    };
    x.send();
  });
};
