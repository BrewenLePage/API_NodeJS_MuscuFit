module.exports = app => {
    const subscription = require('./subscription-controller');
    const router = require('express').Router();

    router.post("/subscription", subscription.subscription)


    // -- To declare the prefix path of your API service
    app.use("/muscufit/api/v1", router);
}