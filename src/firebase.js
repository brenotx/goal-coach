import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCIA25v8ylgeSTSmaRnBZmBLf_4huvCork",
    authDomain: "goal-coach-d3bba.firebaseapp.com",
    databaseURL: "https://goal-coach-d3bba.firebaseio.com",
    projectId: "goal-coach-d3bba",
    storageBucket: "goal-coach-d3bba.appspot.com",
    messagingSenderId: "851214169569"
};

export const firebaseApp = firebase.initializeApp(config);
