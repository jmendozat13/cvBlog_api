"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ProgressbarSchema = (0, _mongoose.Schema)({
  theme: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  valuenow: {
    type: Number,
    required: true
  },
  valuemin: {
    type: Number,
    required: true
  },
  valuemax: {
    type: Number,
    required: true
  }
});

var _default = (0, _mongoose.model)('Progressbar', ProgressbarSchema);

exports["default"] = _default;