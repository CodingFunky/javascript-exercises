const outerArr = [];
const innerArr = [];
outerArr.push(innerArr);
innerArr[0] = "hello";
console.log(outerArr);
