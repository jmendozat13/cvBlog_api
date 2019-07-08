"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _experience = require("../controlles/experience.controller");

var router = (0, _express.Router)();
router.get('/:profileId', _experience.getAllExperienceByProfileId);
router.post('/', _experience.saveExperience);
var _default = router;
exports["default"] = _default;