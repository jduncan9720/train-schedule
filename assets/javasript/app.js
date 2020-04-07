var firebaseConfig = {
    apiKey: "AIzaSyCOzXzJ81Jxvg5qGdMyjPtDWJDifHSyjo4",
    authDomain: "jduncan.firebaseapp.com",
    databaseURL: "https://jduncan.firebaseio.com",
    projectId: "jduncan",
    storageBucket: "jduncan.appspot.com",
    messagingSenderId: "189053086767",
    appId: "1:189053086767:web:56ce8e3fae0e97f649aada",
    measurementId: "G-NGMDBZT5H0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Assign the database to a variable
var database = firebase.database();

  var trainName = "";
  var trainDestination = "";
  var firstTrain = "";
  var trainFrequency = 0;

//When submit button is clicked 
$("#submit-button").on("click", function(event) {
  event.preventDefault();

  trainName = $("#Input1").val().trim();
  trainDestination = $("#Input2").val().trim();
  firstTrain = $("#Input3").val().trim();
  trainFrequency = $("#Input4").val().trim()

  database.ref("/trains").push({
    trainName: trainName,
    trainDestination: trainDestination,
    firstTrain: firstTrain,
    trainFrequency: trainFrequency
  });

  $("#Input1").val("");
  $("#Input2").val("");
  $("#Input3").val("");
  $("#Input4").val("");

});

//need to add input data to table
database.ref("/trains").on("child_added", function(childSnapshot) {

  console.log(childSnapshot.val().trainName);
  console.log(childSnapshot.val().trainDestination);
  console.log(childSnapshot.val().firstTrain);
  console.log(childSnapshot.val().trainFrequency);
  
  trainName = childSnapshot.val().trainName;
  trainDestination = childSnapshot.val().trainDestination;
  firstTrain = childSnapshot.val().firstTrain;
  trainFrequency = childSnapshot.val().trainFrequency;

// .append() to the table row to add a new row with trainName
$("#trainRows").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + firstTrain + "</td></tr>");

//Do math to add current time and arrival times.

});







  

  

