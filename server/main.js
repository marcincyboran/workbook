const express = require('express');

const app = express();
app.use(express.json());

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
            date: new Date(),
            location: 'Wrocław',
            tags: ['dach']
        },
        { 
            id: 3,
            title: 'offer 3',
            text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
            date: new Date(),
            location: 'Zgorzelec',
            tags: ['remont', 'ściana']
        },
        { 
            id: 4,
            title: 'offer 4',
            text: 'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
            date: new Date(),
            location: 'Warszawa',
            tags: ['remont', 'podłoga']
        }
    ]

app.get('/', (req, res) => {
    console.log(req);
    res.send('/ responses');
});

app.get('/test', (req, res) => {
    res.send('/test response');
});

app.get('/api', (req, res) => {
    res.send('/api responseaa');
});

app.get('/api/offerts', (req, res) => {
    res.send(offers);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up. Listening on port ${port}...`);
});
