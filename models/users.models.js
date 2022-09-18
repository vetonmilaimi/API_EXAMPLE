const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    age: {
      type: Number,
      min: 1
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.model('users', usersSchema)
module.exports = usersModel