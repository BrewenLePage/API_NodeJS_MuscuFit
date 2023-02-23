const firestore = require('../config/firebase-config');

export.usersList = async (req, res) => {
    /*
    #swagger.tags = ['Users']
    #swagger.description = 'Service to get a list of all users of the Gym'
    #swagger.summary = 'Service to get a list of all users from the database'
    #swagger.security = [{
            "bearerAuth": []
    }]

    #swagger.responses[200] = {
        description: 'Return a list of all users',
        schema: {
          type: 'array',
            items: {
                $ref: '#/definitions/UsersList'
            }
        }
    }

    #swagger.responses[401] = {
        description: 'Invalid token',
        schema:
            type: string
                message : "You don't have the permission"
    }

    #swagger.responses[500] = {
        description: 'Server Error',
        schema:
            type: string
            message : "Internal Serveur Error"
      }
    */

    try {

        const usersList = await firestore.collection("users").get();
        return res.status(200).json(usersList.docs.map((doc) => doc.date()));

    }
    catch(err){

        console.error(err);
        return res.status(500).send({
            "error":"Error from the server, try it later"
        })
    }
}