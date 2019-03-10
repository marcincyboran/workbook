const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/api/company - router')
});

router.get('/:id', (req, res) => {
    res.send('/api/company - router')
})

module.exports = router;