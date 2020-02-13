class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key, value){
    const address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    const length = this.data[address].length;
    if(length > 0){
      for(let i = 0; i<length;i++ ){
        if(this.data[address][i][0] === key){
          this.data[address][i][1] = value;
          return;
        }
      }
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i=0; i<currentBucket.length;i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys(){
    const keys = [];
    this.data.forEach(record => {
      if(record){
        for(let i=0; i<record.length;i++){
          keys.push(record[i][0]);
        }
        
      }
    });
    return keys;
  }

  _hash(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;

    }
    return hash;
  }
}

module.exports = {HashTable};