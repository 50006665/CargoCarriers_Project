//Initilaise Firebase

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDdNJS0-T1ok1g1HlA7YIReWRiUL0ZrOK4",
    authDomain: "cargocarriers-83392.firebaseapp.com",
    databaseURL: "https://cargocarriers-83392.firebaseio.com",
    projectId: "cargocarriers-83392",
    storageBucket: "cargocarriers-83392.appspot.com",
    messagingSenderId: "776860688933"
  };
  firebase.initializeApp(config);

  //reference messages collcetion

  var messagesRef =  firebase.database().ref('messages');

//Listen for form submit

document.getElementById('contact').addEventListener('submit', submitForm);


//Submit Form



function submitForm(e){

    e.preventDefault();
    
    //get values

    var name = getInputVal('formName');
    var Email = getInputVal('formEmail');
    var Phone = getInputVal('formPhone');
    var textArea = getInputVal('formTextArea');

    saveMessage(name, Email, Phone, textArea);


}


//Function to get form values

function getInputVal(id){

    return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage(name, Email, Phone, textArea){

    var newMessageRef = messagesRef.push();
    newMessageRef.set({

        name: name,
        Email : Email,
        Phone : Phone,
        textArea : textArea

    });
}

