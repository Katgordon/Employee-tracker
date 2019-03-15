
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAObEOsqufzlOD-2L2puvd6Co8ZmDM4c6c",
    authDomain: "highest-bidder-ea7a1.firebaseapp.com",
    databaseURL: "https://highest-bidder-ea7a1.firebaseio.com",
    projectId: "highest-bidder-ea7a1",
    storageBucket: "",
    messagingSenderId: "310123069837"
  };
  firebase.initializeApp(config);
</script>    
    
    
    // Initial Values
    var name = "";
    var email = "";
    var age = 0;
    var comment = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Grabbed values from text boxes
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

      // Code for handling the push
      database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    });

    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();

      // Console.loging the last user's data
      console.log(sv.name);
      console.log(sv.email);
      console.log(sv.age);
      console.log(sv.comment);

      // Change the HTML to reflect
      $("#name-display").text(sv.name);
      $("#email-display").text(sv.email);
      $("#age-display").text(sv.age);
      $("#comment-display").text(sv.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
