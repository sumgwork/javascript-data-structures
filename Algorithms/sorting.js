const bubbleSort = input => {

  const length = input.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

const selectionSort = input => {

  const length = input.length;

  for (let i = 0; i < length; i++) {
    let smallestIndex = i;

    for (let j = i+1; j < length; j++) {
      if (input[j] < input[smallestIndex]) {
        smallestIndex = j;
      }
    }

    const temp = input[smallestIndex];
    input[smallestIndex] = input[i];
    input[i] = temp; 
  }
  return input;
}

const insertionSort = input => {

  const length = input.length;

  for (let i = 0; i < length; i++) {
    if(input[i] < input[0]){
      // move the number to first position
      input.unshift(input.splice(i,1)[0]);
    } else {
      //find where the number should go
      for(let j=1; j<i; j++){
        if(input[i] > input[j-1] && input[i] < input[j]){
          //move the number to the right spot
          input.splice(j, 0, input.splice(i,1)[0]);
        }
      }
    }
  }
  return input;
}

// mergeSort -- difficult to implement
// quickSort -- difficult to implement

module.exports = { bubbleSort, selectionSort, insertionSort };
