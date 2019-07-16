"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _Tool = _interopRequireDefault(require("./Tool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose.model['Tool'] = _Tool["default"];
var skillSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true,
    max: 90,
    min: 2
  },
  profileId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  order: Number,
  type: {
    type: String,
    required: true
  },
  tools: [_mongoose.model["Tool"].schema]
});

var _default = (0, _mongoose.model)('Skill', skillSchema);

exports["default"] = _default;