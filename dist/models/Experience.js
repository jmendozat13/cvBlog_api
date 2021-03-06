"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _ExperienceSection = _interopRequireDefault(require("./ExperienceSection"));

var _Company = _interopRequireDefault(require("./Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose.model['ExperienceSection'] = _ExperienceSection["default"];
_mongoose.model['Company'] = _Company["default"];
var experienceSchema = (0, _mongoose.Schema)({
  profileId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  position: {
    type: String,
    max: 250,
    min: 10,
    required: true
  },
  startDate: {
    type: Date,
    "default": Date.now(),
    required: true
  },
  endDate: {
    type: Date,
    required: false
  },
  present: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    max: 800,
    min: 10,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  company: _mongoose.model["Company"].schema,
  experienceSection: [_mongoose.model["ExperienceSection"].schema]
});

var _default = (0, _mongoose.model)('Experience', experienceSchema);

exports["default"] = _default;