const User  = require('../models/User')

const createUser = async (req, res) => {

    const user = await User.create(req.body);
    res.status(201).json(user)
}

const getAllUsers = async (req, res) => {

    const users = await User.find()
    if (!users) return res.status(404).send('No users found')
    res.status(200).json(users)
}

const createExercise = async (req, res) => {
    const { _id } = req.params
    let { description, duration, date } = req.body

    if (!date) {
        date = new Date().toDateString()
    } else if (isValidDateInput(date)) {
        date = new Date(date).toDateString()
    } else {
        return res.send('Enter a valid input for date')
    }
    let newExercise = {
        description: description,
        duration: duration,
        date: date
    };

    let user = await User.findById(_id)
    if (!user) {
        return res.send(`No user with id ${_id}`)
    }
    user.log.push(newExercise);
    user.save((err, data) => {
        if (err) res.send("Couldn't add exercise");
        res.send({ username: user.username, description, duration, date, _id });
    });

}

const getUserLogs = async (req, res) => {
    const {_id} = req.params
    const user = await User.findById(_id)
    if (!user) {
        res.status(404).send("No user found for that ID");
    }
    const {from, to, limit} = req.query
    let log = user.log;
    if (isValidDateInput(from)) {
        log = log.filter(l => Date.parse(l.date) >= Date.parse(from));
    }
    else if (from) {
        res.send(`Enter a valid input for 'from'`);
    }
    if (isValidDateInput(to)) {
        log = log.filter(l => Date.parse(l.date) <= Date.parse(to));
    }
    else if (to) {
        res.send(`Enter a valid input for 'to'`);
    }
    if (limit && Number.isInteger(Number(limit)) && limit > 0) {
        log = log.slice(0, limit);
    }
    else if (limit) {
        res.send(`Enter a valid input for 'limit'`);
    }
    res.json({ username: user.username, count: log.length, _id, log });
    
}


const isValidDateInput = function (date) {
    const dateRegex = /\d{4}-\d{2}-\d{2}/;
    return dateRegex.test(date) && new Date(date) != null;
};



module.exports = { createUser, getAllUsers, createExercise, getUserLogs }