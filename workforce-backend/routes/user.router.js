const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const userController= require('../controller/user.controller')
const userModel = require('../models/user.model');
router.post('/register', async (req, res) => {
    const { error } = userModel.validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // Todo
    // userController.create(req.body);
})

router.get('/login', async (req, res) => {
    res.status(200).send("Login User")
})

router.get('/:id', auth, async (req, res) => {
    res.status(299).send("Get User Info")
})
module.exports = router;