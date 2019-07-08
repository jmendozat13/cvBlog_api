"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = require("mongoose");

var _cors = _interopRequireDefault(require("cors"));

var _path = require("path");

require("dotenv/config");

var _index = _interopRequireDefault(require("./routes/index"));

var _profile = _interopRequireDefault(require("./routes/profile"));

var _experience = _interopRequireDefault(require("./routes/experience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
(0, _mongoose.connect)(process.env.DB_CONNECTION, {
  useNewUrlParser: true
}, function () {
  return console.log('connected to DB!');
});
app.use((0, _express.json)());
app.use((0, _express.urlencoded)({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(_index["default"]);
app.use('/api/profile/', _profile["default"]);
app.use('/api/experience/', _experience["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: "Not Found"
  });
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send('Ups!');
});
var _default = app;
exports["default"] = _default;