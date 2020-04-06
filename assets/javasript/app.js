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

  //variables to hold train data
  // var trainName = $("#Input1").val().trim();
  // var trainDestination = $("#Input2").val().trim();
  // var firstTrain = $("#Input3").val().trim();
  // var trainFrequency = $("#Input4").val().trim()

  // var train = trainName;
  // var destination = trainDestination;
  // var firstArrival = firstTrain
  // var frequency = trainFrequency


  //On load take variable and update page or anytime database changes
database.ref().on("value", function(snapshot) {

});

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
  })
  // $("#Input1").val("");
  // $("#Input2").val("");
  // $("#Input3").val("");
  // $("#Input4").val("");


});


  

  

