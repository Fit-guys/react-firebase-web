import { db } from './firebase';


// User API

export const writeUserData = (userId, name, email, imageUrl, progress, canRate) => {
    db.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl,
        progress: progress,
        canRate: canRate
    });
};

export const doCreateUser = (id, username, email, progress, canRate) =>
  db.ref(`users/${id}`).set({
    username,
    email,
      progress,
      canRate,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUserByUid = (uid) =>
    db.ref('/users/' + uid).once('value');

export const onceGetRaiting = () =>
    db.ref('rate').once('value');

export const rateUs = (newRate) => {
  onceGetRaiting().then(snapshot => {
      let rated = snapshot.val().rated;
      let all = snapshot.val().rating * rated;
      let newRated = rated + 1;
      let newRating = (all + newRate)/newRated;
      db.ref('rate').set({
          rating: newRating,
          rated: newRated
      });
  })
};

export const disableRateApability = (uid) =>
    db.ref(`users/${uid}/canRate`).set(false);

// Other db APIs ...
