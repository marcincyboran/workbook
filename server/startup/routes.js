const express = require('express');

const offertRouter = require('../routes/offert');
const offertsRouter = require('../routes/offerts');
const companyRouter = require('../routes/company');
const companiesRouter = require('../routes/companies');
const authRouter = require('../routes/auth');
const usersRouter = require('../routes/users');

module.exports = function (app) {

    app.use(express.json());

    app.use('/api/offert', offertRouter);
    app.use('/api/offerts', offertsRouter);
    app.use('/api/company', companyRouter);
    app.use('/api/companies', companiesRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/users', usersRouter);

}