let findMatches = (array_1, array_2, array_3) => {
  let pointer_1 = 0
  let pointer_2 = 0
  let pointer_3 = 0
  let output = []
  while(array_1[pointer_1] !== undefined && array_2[pointer_2] !== undefined && array_3[pointer_3] !== undefined) {
    if(array_1[pointer_1] == array_2[pointer_2] && array_1[pointer_1] == array_3[pointer_3]){
      output.push(array_1[pointer_1])
      pointer_1++;
      pointer_2++;
      pointer_3++;
    } else {
      let target = array_1[pointer_1]
      if(array_2[pointer_2] > target) {
        target = array_2[pointer_2]
      }
      if(array_3[pointer_3] > target) {
        target = array_3[pointer_3]
      }
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
