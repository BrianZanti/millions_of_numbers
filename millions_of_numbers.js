let findMatches = (array_1, array_2, array_3) => {
  let pointer_1 = 0
  let pointer_2 = 0
  let pointer_3 = 0
  let output = []
  // until we've looked all the way through one of the arrays
  while(array_1[pointer_1] !== undefined && array_2[pointer_2] !== undefined && array_3[pointer_3] !== undefined) {
    // if all the elements are equal
    if(array_1[pointer_1] == array_2[pointer_2] && array_1[pointer_1] == array_3[pointer_3]){
      // put that number into the output
      output.push(array_1[pointer_1])
      // increment each point by 1
      pointer_1++;
      pointer_2++;
      pointer_3++;
    } else {
      // set a "target" to the largest value
      let target = array_1[pointer_1]
      if(array_2[pointer_2] > target) {
        target = array_2[pointer_2]
      }
      if(array_3[pointer_3] > target) {
        target = array_3[pointer_3]
      }
      // increment the pointer until the element it points to reaches or exceeds the target value
      // or "goes off" the array (exceeds the number of elements in the array)
      while(array_1[pointer_1] !== undefined && array_1[pointer_1] < target) {
        pointer_1++;
      }
      while(array_2[pointer_2] !== undefined && array_2[pointer_2] < target) {
        pointer_2++;
      }
      while(array_3[pointer_3] !== undefined && array_3[pointer_3] < target) {
        pointer_3++;
      }
    }
  }
  return output;
}

let test_array_1 = [1,2,3,4,5,6,7,8,9,10]
let test_array_2 = [1,2,5,6,7,9,11,12,20]
let test_array_3 = [1,5,7,9,11,12,20,35,100]
console.log(findMatches(test_array_1, test_array_2, test_array_3))
// => [1, 5, 7, 9]


// until we've looked all the way through one of the arrays
  // if all the elements are equal
    // put that number into the output
    // increment each pointer by 1
  // else
    // set a "target" to the largest value
    // increment the pointer until the element it points to reaches or exceeds the target value
    // or "goes off" the array (exceeds the number of elements in the array)

// Calculating Big O
// Function of the length of the input
// Looking for things like loops over each element
    //(or otherwise dependent on the length of the input)
// Simple operations don't add complexity
// When an operation is inside a loop, the complexity multiplies
// When operations are not inside each other, they add (only take the most complex one)

// sort the elements O(n * Log(n))
// then loop over each element O(n)
// O(n * Log(n))

// loop over each element O(n)
    // loop over each element again O(n)
// O(n) * O(n) = O(n^2)
