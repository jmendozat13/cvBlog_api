"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfileById = getProfileById;
exports.saveProfile = saveProfile;

var _Profile = _interopRequireDefault(require("../models/Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProfileById(_x, _x2) {
  return _getProfileById.apply(this, arguments);
}

function _getProfileById() {
  _getProfileById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var profileId, _profile;

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
            console.log(_profile);
            if (_profile == null) res.status(404).json({
              message: "Profile Not Found"
            });
            res.json(_profile);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));
  return _getProfileById.apply(this, arguments);
}

function saveProfile(_x3, _x4) {
  return _saveProfile2.apply(this, arguments);
}

function _saveProfile2() {
  _saveProfile2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, fullName, urlImage, specialty, email, phoneNumber, objectives, _profile, _saveProfile;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, fullName = _req$body.fullName, urlImage = _req$body.urlImage, specialty = _req$body.specialty, email = _req$body.email, phoneNumber = _req$body.phoneNumber, objectives = _req$body.objectives;
            _context2.prev = 1;
            _profile = new _Profile["default"]({
              fullName: fullName,
              urlImage: urlImage,
              specialty: specialty,
              email: email,
              phoneNumber: phoneNumber,
              objectives: objectives
            });
            _context2.next = 5;
            return _profile.save();

          case 5:
            _saveProfile = _context2.sent;
            res.json(_saveProfile);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: _context2.t0
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _saveProfile2.apply(this, arguments);
}