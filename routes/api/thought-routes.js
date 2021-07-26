const router = require('express').Router();

const {getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction} = require('../../controllers/thought-controller')

// router.route('/').get(getAllThoughts)

// router.route('/:userId').post(createThought);

// router.route('/:thoughtId/:userId').get(getSingleThought).put(updateThought).delete(deleteThought);

// router
//     .route('/:thoughtId')
//     .get(getSingleThought)
//     .put(addReaction);

// // /api/thoughts/<thougthId>/<userId>/<reactionId>
// router.route('/:thoughtId/:userId/:reactionId').put(deleteThought);

// module.exports = router;

// /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// /api/thoughts/
router.route('/').get(getAllThoughts);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId/:userId')
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(addReaction);

// /api/thoughts/<thougthId>/<userId>/<reactionId>
router.route('/:thoughtId/:userId/:reactionId').put(deleteReaction);

module.exports = router;