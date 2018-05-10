import { db } from './firebase';


// User API

export const writeUserData = (userId, name, email, imageUrl, progress) => {
    db.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl,
        progress: progress
    });
};

export const doCreateUser = (id, username, email, progress) =>
  db.ref(`users/${id}`).set({
    username,
    email,
      progress,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUserByUid = (uid) =>
    db.ref('/users/' + uid).once('value');

// Other db APIs ...
