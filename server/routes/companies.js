const express = require('express');

const router =  express.Router();

const companies = [
    {
        id: 1,
        name: 'Company 1',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie'],
        likes: 1223,
        votes: 2000
    },
    { 
        id: 2,
        name: 'Company 2',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach'],
        likes: 143,
        votes: 2000
    },
    { 
        id: 3,
        name: 'Company 3',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana'],
        likes: 1113,
        votes: 2000
    },
    { 
        id: 4,
        name: 'Company 4',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga'],
        likes: 1883,
        votes: 2000
    },
    {
        id: 5,
        name: 'Company 1',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie'],
        likes: 1223,
        votes: 2000
    },
    { 
        id: 6,
        name: 'Company 2',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach'],
        likes: 143,
        votes: 2000
    },
    { 
        id: 7,
        name: 'Company 3',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana'],
        likes: 1113,
        votes: 2000
    },
    { 
        id: 8,
        name: 'Company 4',
        text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga'],
        likes: 1883,
        votes: 2000
    }
];

router.get('/', (req, res) => {

    // Pretend database delay
    setTimeout(function() {
        res.send(companies)
    }, 1000);
});

router.get('/:id', (req, res) => {
    res.send('/api/company - router')
})

module.exports = router;