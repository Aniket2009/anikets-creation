//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBrtRZLexkV3NYU_r_lGnYfj4YnT3fWtqs",
  authDomain: "aniket-s-creation.firebaseapp.com",
  databaseURL: "https://aniket-s-creation-default-rtdb.firebaseio.com",
  projectId: "aniket-s-creation",
  storageBucket: "aniket-s-creation.appspot.com",
  messagingSenderId: "607549334264",
  appId: "1:607549334264:web:bcb1733bf7b54a93a7d10d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logout(){
  window.location="index.html";
}