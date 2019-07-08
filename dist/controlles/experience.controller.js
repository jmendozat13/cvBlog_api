"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllExperienceByProfileId = getAllExperienceByProfileId;
exports.saveExperience = saveExperience;

var _Experience = _interopRequireDefault(require("../models/Experience"));

var _ExperienceSection = _interopRequireDefault(require("../models/ExperienceSection"));

var _Profile = _interopRequireDefault(require("../models/Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAllExperienceByProfileId(_x, _x2) {
  return _getAllExperienceByProfileId.apply(this, arguments);
}

function _getAllExperienceByProfileId() {
  _getAllExperienceByProfileId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var profileId, _profile, _experience;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            profileId = req.params.profileId;
            _context.prev = 1;
            _context.next = 4;
            return _Profile["default"].findOne({
              _id: profileId
            });

          case 4:
            _profile = _context.sent;
            if (_profile == null) res.status(404).json({
              message: "Profile Not Found"
            });
            _context.next = 8;
            return _Experience["default"].find({
              profileId: profileId
            });

          case 8:
            _experience = _context.sent;
            res.json(_experience);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getAllExperienceByProfileId.apply(this, arguments);
}

function saveExperience(_x3, _x4) {
  return _saveExperience2.apply(this, arguments);
}

function _saveExperience2() {
  _saveExperience2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, profileId, position, company, startDate, endDate, present, description, order, experienceSection, _experience, _saveExperience;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, profileId = _req$body.profileId, position = _req$body.position, company = _req$body.company, startDate = _req$body.startDate, endDate = _req$body.endDate, present = _req$body.present, description = _req$body.description, order = _req$body.order, experienceSection = _req$body.experienceSection;
            _context2.prev = 1;
            _experience = new _Experience["default"]({
              profileId: profileId,
              position: position,
              company: company,
              startDate: startDate,
              endDate: endDate,
              present: present,
              description: description,
              order: order
            });
            experienceSection.forEach(function (section) {
              var _experienceSection = new _ExperienceSection["default"]({
                experienceId: _experience._id,
                name: section.name,
                type: section.type
              });

              section.items.forEach(function (item) {
                _experienceSection.items.push(item);
              });

              _experience.experienceSection.push(_experienceSection);
            });
            _context2.next = 6;
            return _experience.save();

          case 6:
            _saveExperience = _context2.sent;
            res.json(_saveExperience);
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
  return _saveExperience2.apply(this, arguments);
}