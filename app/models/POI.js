'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  name: String,
  details: String,
  firstName: String,
  lastName: String
});

module.exports = Mongoose.model('PointOfInterest', poiSchema);