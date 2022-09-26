import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsOuAXpU10MXUgt9PxD3QY2VuPp4um82M",
  authDomain: "quiz-app-bismillah.firebaseapp.com",
  projectId: "quiz-app-bismillah",
  storageBucket: "quiz-app-bismillah.appspot.com",
  messagingSenderId: "223042205611",
  appId: "1:223042205611:web:10a2b16639cf34cd2504ee",
  measurementId: "G-J21TTHJTZC",
};

const app = initializeApp(firebaseConfig);

let emailSignup = document.querySelector("#email");
let passwordSignup = document.querySelector("#password");
let signupBtn = document.querySelector("#signup-btn");

const auth = getAuth();
signupBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, emailSignup.value, passwordSignup.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("created", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error =>", errorCode);
    });
});
