var firebaseConfig = {
    apiKey: "AIzaSyB9fU8aGbEF5WIOlkqX9ZwSg_Bq3iffMCA",
    authDomain: "medi-chat-5d984.firebaseapp.com",
    databaseURL: "https://medi-chat-5d984.firebaseio.com",
    projectId: "medi-chat-5d984",
    storageBucket: "medi-chat-5d984.appspot.com",
    messagingSenderId: "666648017063",
    appId: "1:666648017063:web:3613eb5a5012b59bf40382",
    measurementId: "G-E21XESQKXG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function addRoom() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();