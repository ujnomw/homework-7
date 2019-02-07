function throughOnce(fn) {
  var isCallFunc = true; // flag
  return (function(){
    if (isCallFunc){
      fn.apply(null, arguments);
    }
    isCallFunc = !isCallFunc;
  })
}
//function for test
function sumOfTwo(left, right) {
  const result = left + right;
  console.log("sum of " + left + " " + right + " is " + result);
}

var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //

var logSum = throughOnce(sumOfTwo);
logSum(1,2); // 3
logSum(2,2);
logSum(3,2); // 5
logSum(-2,2);
