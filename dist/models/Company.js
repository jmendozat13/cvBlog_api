"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var companySchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    max: 250,
    min: 3,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: true
  }
});

var _default = (0, _mongoose.model)('Company', companySchema);

exports["default"] = _default;