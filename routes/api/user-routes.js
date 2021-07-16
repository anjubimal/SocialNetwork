const router = require('express').Router();
const { addFriend, removeFriend } = require('../../controllers/comment-controller');

// /api/comments/<friendId>
router.route('/:friendId').post(addFriend);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;