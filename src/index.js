"use strict";
module.exports = function toReadable (num) {
  let digitsNum = String(num).split('').map(Number);
  let ans = '';
  let skip = false;
  const len = String(num).length;
  const fromOneToNineteen = ['zero ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 
  'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const tens = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  const illions = ['hundred ', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion ', 'quintillion '];

  if (num === 0) {
    return 'zero';
  }

  for (let i = 0; i < len; i++) {
    if ((len - i) % 3 === 0) {
      console.log('statement 1');
      ans += fromOneToNineteen[digitsNum[i]] + illions[(i / 3)];
    } else if ((len - i) % 2 === 0) {
      console.log('statement 2.123');
      if (digitsNum[i] != 0) {
        console.log('statement 2');
        if (digitsNum[i] === 1) {
          console.log('statement 2.1');
          ans += fromOneToNineteen[Number(String(digitsNum[i]) + String(digitsNum[i + 1]))];
          skip = true;
        } else {
          console.log('statement 2.2');
          ans += tens[digitsNum[i] - 2];
        }
      }
    } else if (skip) {
      console.log('statement skip');
      skip = false;
    } else {
      if (digitsNum[i] != 0) {
        console.log('statement 3');
        ans += fromOneToNineteen[digitsNum[i]];
      }
    }
  }
  return ans.trim();
}
