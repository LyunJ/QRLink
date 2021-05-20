try {
  self.importScripts(
    "firebase/firebase-app.js",
    "firebase/firebase-analytics.js",
    "firebase/firebase-database.js"
  );
  var firebaseConfig = {
    apiKey: "AIzaSyACgyozqDdSXgCC5R7Vww-IKp--WsHCkNw",
    authDomain: "where-are-my-tabs.firebaseapp.com",
    projectId: "where-are-my-tabs",
    storageBucket: "where-are-my-tabs.appspot.com",
    messagingSenderId: "421952925730",
    appId: "1:421952925730:web:dd1e85bb86a548bb521a7b",
    measurementId: "G-NM6KMKKHT4",
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyACgyozqDdSXgCC5R7Vww-IKp--WsHCkNw",
    authDomain: "where-are-my-tabs.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://where-are-my-tabs-default-rtdb.firebaseio.com/",
    storageBucket: "where-are-my-tabs.appspot.com",
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  let email;
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let mesData = message.data;
    email = mesData.email == undefined ? email : mesData.email;
    console.log(email);
    if (message.command == "addUserInfo") {
      console.log(mesData);
      database.ref("users/" + mesData.id).set({
        username: mesData.name,
        email: mesData.email,
      });
    }
    if (message.command == "sendUrls") {
      console.log(JSON.stringify(mesData));
      let emailSplit = email.split("@");
      database.ref("urlbox/" + emailSplit[0]).set({
        emailCompany: emailSplit[1],
        urls: JSON.stringify(mesData),
      });
    }
  });
} catch (e) {
  console.log(e);
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
