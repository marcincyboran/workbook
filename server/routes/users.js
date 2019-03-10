const express = require('express');
const router = express.Router();

// middleware auth function before
router.get('/me', /* auth */ (req, res) => {
    res.send('/api/users/me - router');
});

router.post('/', (req, res) => {
    res.send('/api/users - adding user');
});

module.exports = router;