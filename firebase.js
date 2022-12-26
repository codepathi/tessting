import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApUdK7AtRNPrkVZlP541syKs50OxDiCMk",
  authDomain: "restrox-landing-page-20a8b.firebaseapp.com",
  projectId: "restrox-landing-page-20a8b",
  storageBucket: "restrox-landing-page-20a8b.appspot.com",
  messagingSenderId: "427642500611",
  appId: "1:427642500611:web:c64b78862dbedefa648036",
  measurementId: "G-3TKYYXBG6P",
};

const firebase = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(firebase);

export { analytics };
