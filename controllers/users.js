const User = require('../models/User');

const getUsers = async (req, res, next) => {
  const users = await User.find().populate('username', 'id');

  res.json(users);

  next();
};

const createUser = async (req, res, next) => {
  const { username } = req.body;
  const newUser = new User({ username });

  await newUser.save().then((response) => {
    res.json(response);
  });

  next();
};

module.exports = { getUsers, createUser };
