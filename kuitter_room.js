var firebaseConfig = {
    apiKey: "AIzaSyDSTXpdiK68Z4QfuPKwmFM3OVrIDDCEMFQ",
  authDomain: "ugh-practice.firebaseapp.com",
  databaseURL: "https://ugh-practice-default-rtdb.firebaseio.com",
  projectId: "ugh-practice",
  storageBucket: "ugh-practice.appspot.com",
  messagingSenderId: "861504010536",
  appId: "1:861504010536:web:019051f75b1daa2957b81d"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kuitter_page.html";
  }