const firestore = require('../config/firebase-config');

try {

    const usersList = await firestore.collection("users").get();
    return res.status(200).json(usersList.docs.map((doc) => doc.date()));

}catch(err){

    console.error(err);
    return res.status(500).send({
        error: {
            message: "Error from the server, try it later"
        }
    })
}