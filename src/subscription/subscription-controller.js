const firestore = require('../config/firebase-config');

exports.subscription = async (req,res) => {
    /*
    #swagger.tags = ['Subscribe']
    #swagger.description = 'Service to add a subscription to a user'
    #swagger.summary = 'Service to add a subscription to a user in the database'
    #swagger.security = [{
            "bearerAuth": []
    }]
    */
    const {
        userId,typeSubscription
    } = req.body;
/*
    #swagger.responses[201] = {
        description: 'Subscription successfully create',
        schema: {
          "Id of the users" : "userId",
          "type of the subscription" : "Prenium"
        }
    }

     #swagger.responses[401] = {
                    description: 'Invalid token',
                    schema: {
        "message": "You don't have the permission",
       }
     }

     #swagger.responses[500] = {
                   description: 'Server Error',
                   schema: {
       "message": "Internal server error",
      }
      }
    */



    firestore.collection("subscription").doc(docRef.id).update({
        "userId": userId,
        "typeSusbcription": typeSubscription,
    }).then(function (docRef){
        let messageReturn = "Subscription added to a User"

        console.log(messageReturn);

        return res.status(201).send({
            "userId": userId,
            "typeSubscription": typeSubscription,
        });
    }).catch(function (error){
        return res.status(500).send({"error": "Something went wrong :("})
    });

}