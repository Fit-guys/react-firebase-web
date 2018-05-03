import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAeGLMGdPv5fQhUDKYXarW9Vv2N_iIh60Q",
    authDomain: "cyber-unicorns-game1.firebaseapp.com",
    databaseURL: "https://cyber-unicorns-game1.firebaseio.com",
    projectId: "cyber-unicorns-game1",
    storageBucket: "cyber-unicorns-game1.appspot.com",
    messagingSenderId: "335361319926"
};

const devConfig = {
    apiKey: "AIzaSyAeGLMGdPv5fQhUDKYXarW9Vv2N_iIh60Q",
    authDomain: "cyber-unicorns-game1.firebaseapp.com",
    databaseURL: "https://cyber-unicorns-game1.firebaseio.com",
    projectId: "cyber-unicorns-game1",
    storageBucket: "cyber-unicorns-game1.appspot.com",
    messagingSenderId: "335361319926"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
