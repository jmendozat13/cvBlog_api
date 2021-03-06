"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _profile = require("../controlles/profile.controller");

var router = (0, _express.Router)();
router.get('/:profileId', _profile.getProfileById);
router.post('/', _profile.saveProfile);
var _default = router;
exports["default"] = _default;