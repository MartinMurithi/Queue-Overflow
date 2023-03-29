import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCvXNT49oMnton3Lr9-3EJgg1NjCEQIDLs",
  authDomain: "queueoverflow-a52c5.firebaseapp.com",
  databaseURL: "https://queueoverflow-a52c5-default-rtdb.firebaseio.com",
  projectId: "queueoverflow-a52c5",
  storageBucket: "queueoverflow-a52c5.appspot.com",
  messagingSenderId: "445937133186",
  appId: "1:445937133186:web:c301dd03dbdc15066fb69b",
  measurementId: "G-XY2Z6NNV8E"
};

const app = initializeApp(firebaseConfig);
