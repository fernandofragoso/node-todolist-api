'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Contact name'
  },
  phone: {
    type: String,
    required: 'Enter Contact phone'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: String,
    required: 'The task should have an owner'
  },
});

module.exports = mongoose.model('Contacts', ContactSchema);
