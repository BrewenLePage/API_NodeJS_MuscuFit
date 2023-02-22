var admin = require("firebase-admin");

var serviceAccount = require("../../ressources/private-key/muscufit-firebase-adminsdk-pmy36-3a84f50ff5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

module.exports = firestore;