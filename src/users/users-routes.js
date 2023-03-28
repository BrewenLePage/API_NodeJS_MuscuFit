module.exports = app => {
    const users = require('./users-controller');
    const router = require('express').Router();
    const jwtMiddleware = require('../auth/jwt-middleware');


    router.put("/users-update", jwtMiddleware.checkJwtTokenMiddleware, users.usersUpdate)

    router.delete("/users-delete", jwtMiddleware.checkJwtTokenMiddleware, users.usersDelete)

    router.get("/users-list", jwtMiddleware.checkJwtTokenMiddleware, users.usersList)

    // -- To declare the prefix path of your API service
    app.use("/muscufit/api/v1", router)
}