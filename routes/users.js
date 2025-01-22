const { Router } = require('express');
const { createUser, getUsers } = require('../controllers/users');
const { addExercise } = require('../controllers/exercises');
const { getLogsByUserId } = require('../controllers/logs');

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.post('/:_id/exercises', addExercise);
router.get('/:_id/logs', getLogsByUserId);

module.exports = router;
