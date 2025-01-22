const Exercise = require('../models/Exercise');
const User = require('../models/User');

const addExercise = async (req, res, next) => {
  const userId = req.params._id;
  const { description, duration, date } = req.body;

  const parsedDuration = parseInt(duration);
  const parsedDate = date
    ? new Date(date).toDateString()
    : new Date().toDateString();

  const { username } = await User.findById(userId);

  const newExercise = new Exercise({
    username,
    userId: userId,
    description,
    duration: parsedDuration,
    date: parsedDate,
  });

  await newExercise.save().then(() => {
    res.json({
      username,
      _id: userId,
      description,
      duration: parsedDuration,
      date: parsedDate,
    });
  });

  next();
};

module.exports = { addExercise };
