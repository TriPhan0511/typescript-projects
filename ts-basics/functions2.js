"use strict";
// function addNumbers(a: number, b: number): number {
//   return a + b
// }
// console.log(addNumbers(1, 2));
exports.__esModule = true;
exports.formatUser = void 0;
var formatUser = function (user) {
    var _a, _b, _c;
    return "Fullname: ".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'First name', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'Last name', " - Age: ").concat((_c = user === null || user === void 0 ? void 0 : user.age) !== null && _c !== void 0 ? _c : 0);
};
exports.formatUser = formatUser;
// console.log(formatUser({}));
