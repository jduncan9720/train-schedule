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

//When submit button is clicked 
$("#submit-button").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#Input1").val().trim();
  var trainDestination = $("#Input2").val().trim();
  var firstTrain = $("#Input3").val().trim();
  var trainFrequency = $("#Input4").val().trim()

  database.ref("/trains").push({
    Train: trainName,
    Destination: trainDestination,
    Arrival: firstTrain,
    Frequency: trainFrequency
  });

  $("#Input1").val("");
  $("#Input2").val("");
  $("#Input3").val("");
  $("#Input4").val("");

});

//need to add input data to table
database.ref().on("child_added", function(snapshot) {

  console.log("child_added");
  var trainName = snapshot.val().Train;
  var trainDestination = snapshot.val().Destination;
  var firstTrain = snapshot.val().Arrival;
  var trainFrequency = snapshot.val().Frequency;

  // .append() to the table row to add a new row with trainName
  $("#trainRows").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + firstTrain + "</td><td>" + trainFrequency + "</td></tr>");
});







  

  

