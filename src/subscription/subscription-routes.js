module.exports = app => {
    const subscription = require('./subscription-controller');
    const router = require('express').Router();

    router.post("/subscription", subscription.subscription)


    // -- To declare the prefix path of your API service
    app.use("/Muscufit/api/v1", router);
}