const firestore = require('../config/firebase-config');
const Ajv = require("ajv");
const ajv = new Ajv();

exports.usersUpdate = async (req, res) => {
    /*
    #swagger.tags = ['User']
    #swagger.description = 'Service to update a user'
    #swagger.summary = 'Service to update a user in the database'
    #swagger.security = [{
            "bearerAuth": []
    }]

    #swagger.responses[200] = {
        description: 'Update ok'
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

    isValid = (schemaValidator, data) => {
        return ajv.validate(schemaValidator, data);
    };
    const data = req.body;

    connexionFunction = async (collection, id) => {
    const connexion = await firestore.collection(collection).doc(id).get();
    return connexion.data();
    
    };

    const users = connexionFunction("users", data.id);

    if (!users) return res.status(404).send({ message: "User not found" });

    const newUser = {
    ...users.data(),
    ...data,
    };
    if (!(await isValid(updateUsersSchema, newUser)))
    return res.status(400).send({ error: "Something gone wrong" });
    try {
    await firestore.collection("Users").doc(data.id).update(newUser);
    return res.status(200).send({ success: "User updated successfully" });
    } catch (error) {
    console.log(err);
    return res.status(500).send({ error: "Error server" });
    }
}

exports.usersDelete = async (req, res) => {

    /*
    #swagger.tags = ['User']
    #swagger.description = 'Service to delete a user'
    #swagger.summary = 'Service to delete a user in the database'
    #swagger.security = [{
            "bearerAuth": []
    }]

    #swagger.responses[200] = {
        description: 'Delete ok'
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

    const uid = req.body.uid;

    try {
        if (uid){
            await firestore.collection("users").doc(uid).delete();
            return res.status(200).send({ message: "User successfully delete." });
        }else{
            return res.status(400).send({message: "User doesn't exist"})
        }
    }
    catch (error)
    {
        console.error(error);
        return res.status(500).send({ error: 'Error server' });
    }
};
