const express = require('express');
const router = express.Router();
const { validateOffer, Offer } = require('../models/offert');

router.get('/:id', async (req, res) => {
    const offer = await Offer.findById(req.params.id);
    res.send(offer);
})

router.post('/add', async (req, res) => {
    const { error } = validateOffer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const offer = new Offer({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        tags: req.body.tags,
        publisherID: req.body.publisherID
    });

    await offer.save();
    res.send(offer);
})
module.exports = router;