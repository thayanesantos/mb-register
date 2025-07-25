const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    const registerList = [];
    res.send(registerList);
})

router.post('/', (req, res) => {
    const registerUser = req.body;

    res.send({
        message: 'New user register was added to the list',
    });
})


module.exports = router;