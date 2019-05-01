var config = {
    apiKey: "AIzaSyDRShMLXuW2Nmfkk3i3zippbwE08bfUmJI",
    authDomain: "legend-firbase-tut.firebaseapp.com",
    databaseURL: "https://legend-firbase-tut.firebaseio.com",
    projectId: "legend-firbase-tut",
    storageBucket: "legend-firbase-tut.appspot.com",
    messagingSenderId: "852797595665"
    };
    firebase.initializeApp(config);
    const auth = firebase.auth();
    const db = firebase.firestore();