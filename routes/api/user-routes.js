const router = require('express').Router();
const { getAllUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// // /api/comments/<friendId>
router.route('/:userId/friends/:friendId').put(addFriend);

// // /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').put(removeFriend);

module.exports = router;