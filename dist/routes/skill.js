"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _skill = require("../controlles/skill.controller");

var router = (0, _express.Router)();
router.get('/:profileId', _skill.getSkillsByProfileId);
router.post('/', _skill.saveSkill);
var _default = router;
exports["default"] = _default;