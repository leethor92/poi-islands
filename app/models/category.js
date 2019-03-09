'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const candidateSchema = Schema({
  name: String
});

module.exports = Mongoose.model('Category', candidateSchema);