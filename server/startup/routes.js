const express = require('express');

const offertsRouter = require('../routes/offerts');
const companiesRouter = require('../routes/companies');
const authRouter = require('../routes/auth');
const usersRouter = require('../routes/users');

module.exports = function (app) {

    app.use(express.json());

    app.use('/api/offerts', offertsRouter);
    app.use('/api/companies', companiesRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/users', usersRouter);

}