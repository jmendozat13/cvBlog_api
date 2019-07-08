"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var profileSchema = (0, _mongoose.Schema)({
  fullName: {
    type: String,
    min: 3,
    max: 250,
    required: true
  },
  urlImage: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    min: 3,
    max: 250,
    required: true
  },
  email: {
    type: String,
    min: 5,
    max: 100,
    required: true
  },
  phoneNumber: {
    type: String,
    min: 5,
    max: 15,
    required: true
  },
  objectives: {
    type: String,
    required: true
  }
});

var _default = (0, _mongoose.model)('Profile', profileSchema);

exports["default"] = _default;