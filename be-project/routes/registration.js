const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    const registerList = [];
    res.send(registerList);

    // res.send('response Registration method *GET*')
})

router.post('/', (req, res) => {
    const registerUser = req.body;

    res.send({
        message: 'New user register was added to the list',
    });
    // res.send('Got a POST request')
})


module.exports = router;