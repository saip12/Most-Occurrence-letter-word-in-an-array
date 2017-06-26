
var Array = {};

var givenArr = ['saiteja', 'vamshi', 'samatha', 'srinivas']; 
var output = {};

for (var i = 0; i < givenArr.length; i++) {
  for (var j = 0; j < givenArr[i].length; j++) {
    if (givenArr[i].charAt(j) in Array === true) {
      Array[givenArr[i].charAt(j)] = Array[givenArr[i].charAt(j)] + 1;
  } 
    else {
      var char = givenArr[i].charAt(j);
      Array[char] = 1;
    }
  }

  var values = Object.values(Array);
   var maximumVal = values.reduce(function(a, b)
  {
    return Math.max(a, b);
    });
    output[givenArr[i]] = maximumVal;
   Array = {};
}
var result=Object.keys(output).reduce(function(a, b)
{ 
  if(output[a] > output[b]){
    return a;
  }else{
    return b;
  }
  
 });
document.write("Most Repeated Letters are in = " + result);