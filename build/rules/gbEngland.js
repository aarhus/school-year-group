"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = function _default(dob) {
  var when = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var schoolBirthYear = dob.getFullYear();
  if (dob.getMonth() < 9) {
    schoolBirthYear = schoolBirthYear + 4;
  } else {
    schoolBirthYear = schoolBirthYear + 5;
  }
  var years = [];
  if (when === true) {
    var now = new Date();
    when = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  }
  for (var i = 0; i < 14; i++) {
    var startDate = "".concat(schoolBirthYear + i, "-09-01");
    var endDate = "".concat(schoolBirthYear + i + 1, "-08-31");
    if (when === false) {
      years.push({
        year: i,
        yearName: i == 0 ? "Reception" : "Year ".concat(i),
        startDate: startDate,
        endDate: endDate
      });
      continue;
    }
    if (when >= startDate && when <= endDate) {
      return {
        year: i,
        yearName: i == 0 ? "Reception" : "Year ".concat(i),
        startDate: startDate,
        endDate: endDate
      };
    }
  }
  if (years.length === 0) {
    return false;
  }
  return years;
};