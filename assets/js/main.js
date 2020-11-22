// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDw2j6VdL-OKmT6UOcRDoH6uLZldq2TwWw",
  authDomain: "janah-72c76.firebaseapp.com",
  databaseURL: "https://janah-72c76.firebaseio.com",
  projectId: "janah-72c76",
  storageBucket: "janah-72c76.appspot.com",
  messagingSenderId: "258029815815",
  appId: "1:258029815815:web:8518e9d15ebb7bf05442a2",
  measurementId: "G-NHXS9RGMVF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// make auth and firestore references
const auth = firebase.auth();
// const db = firebase.firestore();
const db = firebase.database();

// changing icon by OS theme

lightSchemeIcon = document.querySelector("#themeLightOsIconSite");
darkSchemeIcon = document.querySelector("#themeDarkOsIconSite");

function onUpdate() {
	if (matcher.matches) {
		lightSchemeIcon.remove();
		document.head.append(darkSchemeIcon);
	} else {
		document.head.append(lightSchemeIcon);
		darkSchemeIcon.remove();
	}
}

const uid = Cookies.get("uid");

const tasksQuery = `users/${uid}/tasks`
const driversQuery = `users/${uid}/drivers`

