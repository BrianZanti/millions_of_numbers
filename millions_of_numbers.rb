require 'pry'
def find_matches(array_1, array_2, array_3)
  pointer_1 = 0
  pointer_2 = 0
  pointer_3 = 0
  output = []
  until array_1[pointer_1].nil? || array_2[pointer_2].nil? || array_3[pointer_3].nil?
    target = array_1[pointer_1]
    target = array_2[pointer_2] if array_2[pointer_2] > target
    target = array_3[pointer_3] if array_3[pointer_3] > target
    if array_1[pointer_1] == array_2[pointer_2] && array_1[pointer_1] == array_3[pointer_3]
      output << array_1[pointer_1]
      pointer_1 += 1
      pointer_2 += 1
      pointer_3 += 1
    else
      until array_1[pointer_1].nil? || array_1[pointer_1] >= target
        pointer_1 += 1
      end
      until array_2[pointer_2].nil? || array_2[pointer_2] >= target
        pointer_2 += 1
      end
      until array_3[pointer_3].nil? || array_3[pointer_3] >= target
        pointer_3 += 1
      end
    end
  end
  return output
end

test_array_1 = [1,2,3,4,5,6,7,8,9,10]
test_array_2 = [1,2,5,6,7,9,11,12,20]
test_array_3 = [1,5,7,9,11,12,20,35,100]
p find_matches(test_array_1, test_array_2, test_array_3)
# => [1, 5, 7, 9]
