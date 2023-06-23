const User = require("../models/user");

module.exports = {
    getAll(req, res) {
        User.find().then(users => {
            res.send(users);
        });
    },

    get(req, res) {
        const id = req.params.id;
        User.findById(id).then(user => {
            res.send(user);
        });
    },
}