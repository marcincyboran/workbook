const express = require('express');
const router = express.Router();

// middleware auth function before
router.get('/me', /* auth */ (req, res) => {
    res.send('/api/users/me - router');
});

router.post('/', (req, res) => {
    res.send('/api/users - adding user');
});

router.post('/add/:type', async (req, res) => {
    console.log(req.body.data);
    console.log(req.params.type);
    res.send(req.body.data);
});

module.exports = router;