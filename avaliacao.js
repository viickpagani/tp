const firebaseConfig = {
  apiKey: "AIzaSyDFY2cumrc9PiPVJzqfuIf0AaZ8Uz---bQ",
  authDomain: "lardona-b9771.firebaseapp.com",
  databaseURL: "https://lardona-b9771-default-rtdb.firebaseio.com",
  projectId: "lardona-b9771",
  storageBucket: "lardona-b9771.appspot.com",
  messagingSenderId: "163118554003",
  appId: "1:163118554003:web:302cff271834f0b249a666"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,

  });

  document.getElementById("msg").value = "";
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        name_with_tag = "<h4> " + name;
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        span_with_tag = "<hr>";
        row = name_with_tag + message_with_tag + span_with_tag;
        document.getElementById("output").innerHTML += row;
        //End code
      }
    });
  });
}
getData();



