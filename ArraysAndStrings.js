// Reverse a string
const reverse = (text) => {
  const reversed = [];
  for (let i = text.length - 1; i >= 0; i--) {
    reversed.push(text[i]);
  }
  return reversed.join("");
}

const reverseModern = text => [...text].reverse().join('');

const mergeSortedArrays = (array1, array2) => {
  if(array1.length === 0) return array2;
  if(array2.length === 0) return array1;

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 0;
  let j = 0;
  const merged = [];
  
  while (array1Item || array2Item){
      if(!array2Item || array1Item < array2Item){
        merged.push(array1Item);
        i++;
        array1Item = array1[i];
      } else {
        merged.push(array2Item);
        j++;
        array2Item = array2[j];
      }
  }
  return merged;
}

module.exports = { reverse, reverseModern, mergeSortedArrays };

