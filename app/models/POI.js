'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  name: String,
  details: String,
  firstName: String,
  lastName: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = Mongoose.model('PointOfInterest', poiSchema);