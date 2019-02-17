const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    res.send('/ response');
});

app.get('/test', (req, res) => {
    res.send('/test response');
});
app.get('/api', (req, res) => {
    res.send('/api response');
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up. Listening on port ${port}...`);
});
