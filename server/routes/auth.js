const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('/api/auth - router post')
});

module.exports = router;