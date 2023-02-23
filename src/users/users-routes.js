module.exports = app => {
    const users = require('/users-controller');
    const router = require('express').Router();

    router.get("/users-list", users.userList);

    router.put("/users-update",users)

    router.delete("/users-delete",users)

    // -- To declare the prefix path of your API service
    app.use("/Muscufit/api/v1", router)
}