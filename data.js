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

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionar data"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "avaliacao.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      room_names = childKey;
      console.log("Room Name - " + room_names);
      row = "<div class='room_name' id=" + room_names + " onclick='redirectToRoomName(this.id)' >#" + room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "avaliacao.html";
}
