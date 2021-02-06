import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyA4iCLdMweezLy-7FX7IgqZXbmdodcIHA4",
    authDomain: "idobatakaigi-with-ri.firebaseapp.com",
    projectId: "idobatakaigi-with-ri",
    storageBucket: "idobatakaigi-with-ri.appspot.com",
    messagingSenderId: "263534605793",
    appId: "1:263534605793:web:71d29b16cd9f6cae550ea0"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({name,text}) => {
  messageRef.push({ name, text });
}