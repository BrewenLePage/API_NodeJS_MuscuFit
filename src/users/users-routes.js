module.exports = app => {
    const users = require('./users-controller');
    const router = require('express').Router();

    router.put("/users-update",users.usersUpdate)

    router.delete("/users-delete",users.usersDelete)

    // -- To declare the prefix path of your API service
    app.use("/Muscufit/api/v1", router)
}