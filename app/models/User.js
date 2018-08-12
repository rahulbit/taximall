'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let userSchema = new Schema({
  empId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  empName: {
    type: String,
    default: ''
  },
  deptName: {
    type: String,
    default: ''
  }
  


})


mongoose.model('User', userSchema);