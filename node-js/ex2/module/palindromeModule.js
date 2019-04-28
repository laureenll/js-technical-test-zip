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

// ------------------------------------>
// please start your implementation below:
//

module.exports = class palindromeFinderClass {
    constructor(dataSource) {
      this.outputPalindromes = [];
      this.outputNotPalindromes = [];
      this.loadDataSource(dataSource);
    }

    loadDataSource(dataSource) {
      dataSource.flatMap((word) => {
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
          this.outputPalindromes.push(word);
        } else {
          this.outputNotPalindromes.push(word);
        }
      });
    }

    find() {
        return this.outputPalindromes;
    }

    findOther() {
        return this.outputNotPalindromes;
    }
};

//
// end of your implementation
// ----------------------------------- <

