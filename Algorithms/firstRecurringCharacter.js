const {HashTable} = require("../DataStructures/HashTable");

// O(n)
const firstRecurringCharacter = dataArray => {
  const hashTable = new HashTable(dataArray.length);
  const map = {};
  for(let i=0; i<dataArray.length; i++){
    const item = dataArray[i];
    if(map[item]!== undefined){
      return item;
    }
    map[item] = true;
  }
  return undefined;
}

module.exports = {firstRecurringCharacter};