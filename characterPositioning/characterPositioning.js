function countLetters(str) {
  var workStr = str.split(" ").join("").split("");
  var finalObj = new Object();
  for (var i = 0; i < workStr.length; i++) {
    if (!finalObj.hasOwnProperty(workStr[i])) {
      finalObj[workStr[i]] = [workStr.indexOf(workStr[i])];
    }
    else {
      finalObj[workStr[i]].push(i);
    }
  }
  return finalObj;
}

console.log(countLetters("lighthouse in the house"));
