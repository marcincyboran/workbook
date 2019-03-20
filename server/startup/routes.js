const express = require('express');

const offersRouter = require('../routes/offers');
const companiesRouter = require('../routes/companies');
const authRouter = require('../routes/auth');
const usersRouter = require('../routes/users');
const baseRouter = require('../routes/base');

module.exports = function (app) {

    app.use(express.json());

    app.use('/api/base', baseRouter);
    app.use('/api/offers', offersRouter);
    app.use('/api/companies', companiesRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/users', usersRouter);

}