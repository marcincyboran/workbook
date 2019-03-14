const express = require('express');
const { validateOffer, Offer } = require('../models/offert');

const router = express.Router();

const offers = [
    {
        id: 1,
        title: 'offer 1',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie']
    },
    { 
        id: 2,
        title: 'offer 2',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach']
    },
    { 
        id: 3,
        title: 'offer 3',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana']
    },
    { 
        id: 4,
        title: 'offer 4',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga']
    }
];

router.get('/', (req, res) => {
    res.send(offers);
});

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