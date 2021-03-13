"use strict";

module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  var newstr = str;
  var newarr = bracketsConfig.map(function (miniarr) {
    return miniarr.join("");
  });

  while (newstr.length > 0) {
    for (var i = 0; i < newarr.length; i++) {
      if (newstr.includes(newarr[i])) {
        newstr = newstr.replace(newarr[i], "");
      }
    }

    if (newarr.every(function (brackets) {
      return newstr.includes(brackets) === false;
    })) break;
  }

  return newstr.length === 0;
};