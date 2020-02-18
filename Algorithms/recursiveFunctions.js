//Implementing Factorial using recursion

const factorial = n => {
  if(n===2) return 2;
  return n * factorial(n-1);
}

const fibonacci = n => {
  if(n < 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}

const reverseString = str => {
  if(str === ""){
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

module.exports = { factorial, fibonacci, reverseString };
