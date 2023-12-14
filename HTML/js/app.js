/* Theme Name: 115
  Author: Themesdesign
  Version: 1.0.0
  File Description: Main JS file of the template
*/

// Show password input value

document.getElementById('password-addon').addEventListener('click', function () {
	var passwordInput = document.getElementById("password-input");
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
});

// two-step move next
function moveToNext(elem, count) {
    if (elem.value.length > 0) {
        document.getElementById("digit" + count + "-input").focus();
    }
}


// add firebase to the project
const firebaseConfig = {
  apiKey: "AIzaSyAsO8amTJnzVndoz0uRfVlGifgHDE0mUkM",
  authDomain: "heyauth-4a3ab.firebaseapp.com",
  projectId: "heyauth-4a3ab",
  storageBucket: "heyauth-4a3ab.appspot.com",
  messagingSenderId: "943518805455",
  appId: "1:943518805455:web:5b387e0e94d55fa572f6ba"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var usersCollectionRef = db.collection('users');


function validateForm() {
  var name = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var phone = document.getElementById('phone').value;
  var educationLevel = document.getElementById('educationLevel').value;
  if (name === '') {
    alert('Please enter your name');
    return false;
  }

  if (username === '') {
    alert('Please enter a username');
    return false;
  }

  if (phone === '') {
    alert('Please enter a phone number');
    return false;
  }

  if (educationLevel === '') {
    alert('Please enter your education level');
    return false;
  }
  return true;
}

document.getElementById('singup_auth').addEventListener('submit', function(event) {
  event.preventDefault(); 
  if (validateForm()) {
    submitForm();
  }
});

const submitForm = () => {
  usersCollectionRef.add(userData)
  .then(function(docRef) {
    console.log('User data saved with ID: ', docRef.id);
  })
  .catch(function(error) {
    console.error('Error adding user data: ', error);
  });
} 