const {Thought} = require('../models');
const User = require('../models/User');


const UserController = {
    getAllUsers(req,res){
        User.find().select('-__v')
        .populate({
            path: 'thougths',
            select: '-__v'
        })
    .then(userdata => {res.json(userdata)})
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
    },

    getSingleUser(req,res){
        User.findOne({_id: req.params.userId}).select('-__v').populate('thoughts')
            .then(userdata => { res.json(userdata) })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },


    createUser(req,res){
        User.create(req.body)
            .then(userdata => { res.json(userdata) })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })

    },


    updateUser(req,res){
        User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {new: true})
            .then(userdata => { if (!userdata){return res.status(404).json({message: 'there is no user with this id'})} res.json(userdata) })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.userId })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    removeFriend({ params }, res) {
        return User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No friend found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    }

}


module.exports = UserController