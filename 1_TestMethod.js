//Regular Expressions: Match Literal Strings
const log = console.log;

//Literal string search
let testRegex = /Code/;
log(testRegex.test("myCodeIsBugless"));// Returns true

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);// Returns true
//Any other forms of "Kevin" will not match. For example, the regex /Kevin/ will not match "kevin" or "KEVIN".

//another example
let word = "My car is black";
let searchWord = /black/;
result = searchWord.test(word);
log(result);

//Regular Expressions: Match a Literal String with Different Possibilities

