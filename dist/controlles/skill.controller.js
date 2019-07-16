"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSkillsByProfileId = getSkillsByProfileId;
exports.saveSkill = saveSkill;

var _Skill = _interopRequireDefault(require("../models/Skill"));

var _Profile = _interopRequireDefault(require("../models/Profile"));

var _Tool = _interopRequireDefault(require("../models/Tool"));

var _Progressbar = _interopRequireDefault(require("../models/Progressbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSkillsByProfileId(_x, _x2) {
  return _getSkillsByProfileId.apply(this, arguments);
}

function _getSkillsByProfileId() {
  _getSkillsByProfileId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var profileId, _profile, _skills;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            profileId = req.params.profileId;
            _context.prev = 1;
            _context.next = 4;
            return _Profile["default"].findById(profileId);

          case 4:
            _profile = _context.sent;
            if (_profile == null) res.status(404).json({
              message: "Profile Not Found"
            });
            _context.next = 8;
            return _Skill["default"].find({
              profileId: profileId
            });

          case 8:
            _skills = _context.sent;
            res.json(_skills);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: _context.t0
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getSkillsByProfileId.apply(this, arguments);
}

function saveSkill(_x3, _x4) {
  return _saveSkill2.apply(this, arguments);
}

function _saveSkill2() {
  _saveSkill2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, profileId, order, type, tools, _skill, _saveSkill;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, profileId = _req$body.profileId, order = _req$body.order, type = _req$body.type, tools = _req$body.tools;
            _context2.prev = 1;
            _skill = new _Skill["default"]({
              name: name,
              profileId: profileId,
              order: order,
              type: type
            });
            tools.forEach(function (tool) {
              console.log(tool.progressbar);

              if (tool.progressbar != null) {
                var _progressbar = new _Progressbar["default"]({
                  theme: tool.progressbar.theme,
                  role: tool.progressbar.role,
                  style: tool.progressbar.style,
                  valuenow: tool.progressbar.valuenow,
                  valuemin: tool.progressbar.valuemin,
                  valuemax: tool.progressbar.valuemax
                });

                var _tool = new _Tool["default"]({
                  name: tool.name,
                  progressbar: _progressbar
                });

                _skill.tools.push(_tool);
              } else {
                var _tool2 = new _Tool["default"]({
                  name: tool.name
                });

                _skill.tools.push(_tool2);
              }
            });
            _context2.next = 6;
            return _skill.save();

          case 6:
            _saveSkill = _context2.sent;
            res.json(_saveSkill);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _saveSkill2.apply(this, arguments);
}