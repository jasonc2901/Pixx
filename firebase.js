import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB8DJQJX_bov45qIdxJPULvWbKjDHh4NmE",
    authDomain: "pixx-a1b23.firebaseapp.com",
    projectId: "pixx-a1b23",
    storageBucket: "pixx-a1b23.appspot.com",
    messagingSenderId: "123498095205",
    appId: "1:123498095205:web:499a75b10ef18ee2be9c8c",
    measurementId: "G-82017T6T6V"
};

// Initialize Firebase
//to prevent mulitple instances of the same firebase we use a singleton pattern to 
//check if the length of the apps is null before initialising or else use existing
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };