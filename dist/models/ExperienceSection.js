"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var itemSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true
  }
});
var Item = (0, _mongoose.model)('Item', itemSchema);
_mongoose.model['Item'] = Item;
var experienceSectionSchema = (0, _mongoose.Schema)({
  experienceId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true,
    min: 1,
    max: 50
  },
  type: {
    type: String,
    required: true,
    min: 1,
    max: 10
  },
  items: [_mongoose.model["Item"].schema]
});

var _default = (0, _mongoose.model)('ExperienceSection', experienceSectionSchema);

exports["default"] = _default;