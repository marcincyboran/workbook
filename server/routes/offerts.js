const express = require('express');

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

module.exports = router;