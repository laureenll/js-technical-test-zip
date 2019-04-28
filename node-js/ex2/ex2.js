/**
 *
 * Your palindrome finder is a big success and will be used in multiple node projects
 * we will use it right now, and require it as a module.
 *
 *  > put your palindromeFinder code source as a module in the "./module" folder
 *  >
 *  > ensure this code works
 *
 * EXECUTION ENVIRONMENT:
 * node >= 6.9.2
 *
 */

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
const ANOTHER_DATA_SOURCE = [
    'detartrated',
    'aibohphobia',
    'imObviouslyNotAnotherPalindrome'
];

// ------------------------------------>
// please start your implementation below:
//
const palindromeFinder = require('./module/palindromeModule.js');
const palindromeFinderClass = new palindromeFinder(DATA_SOURCE);
const palindromeFinderAnotherDataSourceClass = new palindromeFinder(ANOTHER_DATA_SOURCE);
//
// end of your implementation
// ----------------------------------- <

// should return words extracted from DATA_SOURCE that are palindromes:
console.log('found palindromes: ',palindromeFinderClass.find());

// should return words extracted from DATA_SOURCE that are not palindromes:
console.log('are not palindromes: ',palindromeFinderClass.findOther());

// should return words extracted from ANOTHER_DATA_SOURCE that are palindromes:
console.log('found palindromes: ',palindromeFinderAnotherDataSourceClass.find());

// should return words extracted from ANOTHER_DATA_SOURCE that are not palindromes:
console.log('are not palindromes: ',palindromeFinderAnotherDataSourceClass.findOther());