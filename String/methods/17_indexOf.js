String.prototype.indexOf1 = function (ch) {
  if (typeof ch === 'undefined') {
    return -1;
  }
  if (ch === '' && typeof ch === 'string') {
    return 0;
  }
  let j = 0;
  let match = 0;
  for (let i = 0; i < this.length; i++) {
    console.log(i, this[i], ch[j]);
    if (this[i] === ch[j]) {
      match++;
      j++;
      if (match === ch.length) {
        console.log('d: ', i, j, match);
        return i - (ch.length - 1); // this statement is exacuted at the end.
      }
      console.log('a: ', i, j, match);
    } else if (this[i] === ch[0]) {
      match = 0;
      j = 0;
      console.log('b: ', i, j, match);
    } else {
      match = 0;
      j = 0;
      console.log('c: ', i, j, match);
    }
  }
  return -1;
};

//! ====== test ======
const str = 'Hello World';
const index = str.indexOf('H');
const index1 = str.indexOf1('H');
console.log(index, index1);
