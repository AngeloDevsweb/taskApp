// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMIbSWxW5SWQhkmQZtnt8ykn9oWfiHLrE",
  authDomain: "appnotes-b9933.firebaseapp.com",
  projectId: "appnotes-b9933",
  storageBucket: "appnotes-b9933.appspot.com",
  messagingSenderId: "989522350113",
  appId: "1:989522350113:web:412b06932f220cf2bad360"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
