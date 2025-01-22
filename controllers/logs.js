const Exercise = require('../models/Exercise');
const User = require('../models/User');

const getLogsByUserId = async (req, res, next) => {
  const { _id: userId } = req.params;
  const { username, _id } = await User.findById(userId);
  const exercises = await Exercise.find({ userId });
  const log = exercises.map(({ description, duration, date }) => {
    return { description, duration, date };
  });

  res.json({
    username,
    _id: userId,
    count: exercises.length,
    log,
  });
  next();
};

module.exports = { getLogsByUserId };
