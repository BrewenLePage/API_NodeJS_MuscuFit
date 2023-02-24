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
    
    const subs = req.body;
    
  
    try {
        if(subs){
            firestore.collection("subscription").add({
                "userId": userId,
                "typeSusbcription": typeSubscription,
            });
            return res.status(200).send({ message: "Subscription successfully add." });
        }else{
            return res.status(403).send({message: "Access forbidden"});
        }
    }catch{
        return res.status(500).send({error: "Something went wrong :("})
    };

}