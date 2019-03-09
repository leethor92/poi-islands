'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const categorySchema = Schema({
  name: String,
  points: [
    {
      type: Schema.Types.ObjectId,
      ref: 'PointOfInterest'
    }
  ]
});

module.exports = Mongoose.model('Category', categorySchema);