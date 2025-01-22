const { Schema, model } = require('mongoose');

const ExerciseSchema = Schema({
  username: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: String,
  duration: Number,
  date: String,
});

module.exports = model('Exercise', ExerciseSchema);
