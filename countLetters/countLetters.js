function countLetters(str) {
  var workStr = str.toLowerCase().split(" ").join("");
  var finalObj = new Object();
  for (var i = 0; i < workStr.length; i++) {
    if (!finalObj.hasOwnProperty(workStr[i])) {
      finalObj[workStr[i]] = 1;
    }
    else {
      finalObj[workStr[i]] += 1;
    }
  }
  return finalObj;
}
console.log(countLetters("lighthouse in the house"));
