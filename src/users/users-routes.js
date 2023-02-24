module.exports = app => {
    const users = require('./users-controller');
    const router = require('express').Router();
    const jwtMiddleware = require('../auth/jwt-middleware');


    router.put("/users-update", jwtMiddleware.checkJwtTokenMiddleware, users.usersUpdate)

    router.delete("/users-delete", jwtMiddleware.checkJwtTokenMiddleware, users.usersDelete)

    // -- To declare the prefix path of your API service
    app.use("/Muscufit/api/v1", router)
}