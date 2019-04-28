/**
 *
 * You've been asked to implement a palindrome finder for the following DATA_SOURCE.
 * We want to handle strings values only.
 * Non string values should be ignored without crashing or reporting error
 *
 * > implement one or multiple methods to find palindromes in the provided source
 *
 *
 * EXECUTION ENVIRONMENT:
 * node >= 6.9.2
 *
 */

Array.prototype.flatMap = function(lambda) {
  return [].concat.apply([], this).map(lambda);
};

const DATA_SOURCE = [
    'ada',
    'alla',
    1234,
    1234321,
    ['barab'],
    'essayasse',
    'lala',
    'malayalam',
    'imNotAPalindromeObviously'
];
let outputPalindromes = [];
let outputNotPalindromes = [];

// ------------------------------------>
// please start your implementation below:
//

class palindromeFinderClass {
    constructor() {
        this.loadDataSource();
    }

    loadDataSource() {
      DATA_SOURCE.flatMap((word) => {
        let isPalindrome = true;
        if(typeof word === 'number') {
          word = word.toString();
        }
        for (let i = 0; i < word.length; i++) {
          if(word[i] !== word[word.length-(i+1)]) {
            isPalindrome = false;
          }
        }
        if(isPalindrome) {
          outputPalindromes.push(word);
        } else {
          outputNotPalindromes.push(word);
        }
      });
    }

    find() {
        return outputPalindromes;
    }

    findOther() {
        return outputNotPalindromes;
    }
}

//
// end of your implementation
// ----------------------------------- <

const palindromeFinder = new palindromeFinderClass();
// should return words extracted from DATA_SOURCE that are palindromes:
console.log('found palindromes: ',palindromeFinder.find());

// should return words extracted from DATA_SOURCE that are not palindromes:
console.log('are not palindromes: ',palindromeFinder.findOther());

// should return words extracted from DATA_SOURCE  that are palindromes:
console.log('found palindromes: ',outputPalindromes);

// should return words extracted from DATA_SOURCE  that are not palindromes:
console.log('are not palindromes: ',outputNotPalindromes);

