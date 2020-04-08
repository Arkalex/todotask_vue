import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfXyhOQZ1RVmwqUEGezf1KSMKTMqLHiyk",
    authDomain: "helloworld-e6a23.firebaseapp.com",
    databaseURL: "https://helloworld-e6a23.firebaseio.com",
    projectId: "helloworld-e6a23",
    storageBucket: "helloworld-e6a23.appspot.com",
    messagingSenderId: "266667745375",
    appId: "1:266667745375:web:cd09cc6d203dd4fdd2fbea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore();

export default firebaseApp.firestore();