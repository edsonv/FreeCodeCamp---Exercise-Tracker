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

ExerciseSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
});

module.exports = model('Exercise', ExerciseSchema);
