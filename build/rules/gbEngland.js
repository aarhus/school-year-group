"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(dob) {
  var schoolBirthYear = dob.getFullYear();
  if (dob.getMonth() < 9) {
    schoolBirthYear = schoolBirthYear + 4;
  } else {
    schoolBirthYear = schoolBirthYear + 5;
  }
  var years = [];
  for (var i = 0; i < 14; i++) {
    years.push({
      year: i,
      yearName: i == 0 ? "Reception" : "Year ".concat(i),
      startDate: "".concat(schoolBirthYear + i, "-09-01"),
      endDate: "".concat(schoolBirthYear + i + 1, "-08-31")
    });
  }
  return years;
};
exports["default"] = _default;