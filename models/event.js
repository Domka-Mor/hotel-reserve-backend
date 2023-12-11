const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  roomName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  dateStart: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    required: true
  },
  creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
});

module.exports = mongoose.model('Event', eventSchema);