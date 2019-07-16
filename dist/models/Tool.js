"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _Progressbar = _interopRequireDefault(require("./Progressbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose.model['Progressbar'] = _Progressbar["default"];
var toolSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true
  },
  progressbar: _mongoose.model["Progressbar"].schema
});

var _default = (0, _mongoose.model)('Tool', toolSchema);

exports["default"] = _default;