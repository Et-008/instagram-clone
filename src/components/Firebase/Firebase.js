import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

var Config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    // eslint-disable-next-line
    let app = initializeApp(Config);
    this.auth = getAuth();
  }

  createNewUser = (email, password, displayName) => {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        this.updateUserName(displayName);
        return user;
      })
      .catch((error) => {
        return error;
      });
  };

  existingUser = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((user) => user)
      .catch((err) => err);
  };

  updateUserName = (userName) => {
    return updateProfile(this.auth.currentUser, {
      displayName: userName,
    });
  };
}

export default Firebase;
