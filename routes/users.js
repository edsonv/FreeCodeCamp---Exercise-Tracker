const { Router } = require('express');
const { createUser, getUsers } = require('../controllers/users');
const { addExercise } = require('../controllers/exercises');

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.post('/:_id/exercises', addExercise);

module.exports = router;
