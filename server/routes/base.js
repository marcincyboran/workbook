const express = require('express');
const router = express.Router();

router.get('/time', (req, res) => {
    res.send(new Date());
});

module.exports = router;