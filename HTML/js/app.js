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