module.exports = app => {
    const subscription = require('./subscription-controller');
    const router = require('express').Router();

    router.post("/subscription", subscription)
}