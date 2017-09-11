'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Enter Task title'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  owner: {
    type: String,
    required: 'The task should have an owner'
  },
});

module.exports = mongoose.model('Tasks', TaskSchema);
