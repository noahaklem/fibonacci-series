function fibonacci(num) {
  if ( num < 2 ){
    return num
  }

  let sequence = [0,1];

  for(let i = 0; i < num -1; i++) {
    const sum = sequence[0] + sequence[1]
    sequence = [sequence[1], sum]
  }
  return sequence[1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// 1. write a function that is named fibonacci
//   1. takes in a argument of a Number
//     this number is the nth spot in an array
//   2. the Array is always starting with [0,1]
//   3. after the first two spots of the array the value is the sum of the two values preceding it
//     example: array = [0,1]
//     fibonacci(4)
//     array = [0,1,1,2]
//     result would be 2

// And a written explanation of your solution
