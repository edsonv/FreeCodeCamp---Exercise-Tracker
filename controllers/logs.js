const Exercise = require('../models/Exercise');
const User = require('../models/User');

const getLogsByUserId = async (req, res, next) => {
  const { _id: userId } = req.params;
  const { from, to, limit } = req.query;
  // TODO: implement using from and to to filter data
  const { username } = await User.findById(userId);
  const exercises = await Exercise.find({ userId }).limit(limit);
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
