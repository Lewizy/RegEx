//Regular Expressions: Match Literal Strings

const log = console.log;

//Literal string search:

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

//Match a Literal String with Different Possibilities //////////////////////////////////////////////////
//The "OR" Operator : ( | )

let JesusIs = "Jesus is amazing";
let or_OperatorMethod = /awesome|great|amazing|cool|king|powerful/;
log(or_OperatorMethod.test(JesusIs));

//Ignore Case While Matching: //( i )flag = [ignore cases]

let ignoreCaseWord = "ThiswordiscasemixeD";
let i_Flag = /THISwordIScaseMIXED/i;
log(iFlag.test(ignoreCaseWord));//true

//Extract Matches:///////////////////////////////////////////////////////////////////////////////////////
//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. 
//Here's an example:

"HelLo, World!".match(/Hello/i);
// Returns ["HelLo"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//Find More Than the First Match: [g_flag = global]  ///////////////////////////////////////////////////////

let repeatedWord = "Repeat, I repeat this is a rEPeAt-ed string";
let searchRepeatedWordsIgnoringCases = /repeat/gi;
let result = repeatedWord.match(searchRepeatedWordsIgnoringCases);
log(result);//returs [ 'Repeat', 'repeat', 'rEPeAt' ]

//Match Anything with Wildcard Period: ( . )////////////////////////////////////////////////////////////////////

let allWordsThatEndIN_un = "Big pun runs in the sun, beacuse its fun, hun";
let regEx_periodMethod = /.un/g;
let result = allWordsThatEndIN_un.match(regEx_periodMethod);
log(result);// [ 'pun', 'run', 'sun', 'fun', 'hun' ]

//Character Classes ( [] ) brackets
//Match Single Character with Multiple Possibilities with: ///////////////////////////////////////////////////

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex);
log(result);//[ 'e','a','e','o','u','i','e','a','o','e',.....]

//Character Sets: match all letters of the alphabet ///////////////////////////////////////////////////////////

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 

//Match all letters and numbers: //////////////////////////////////////////////////////////////////////////////

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 

//Negated character sets ( ^ ) [caret]: ////////////////////////////////////////////////////////////////////////////

// Note that characters like ., !, [, @, / 
// and white space are matched - the negated vowel character set only excludes the vowel characters.

let takeAwayAllVowels = "This sentence shall have no vowels.";
let removeVowelsRegex = /[^aeiou0-9]/gi; 
log(takeAwayAllVowels.match(removeVowelsRegex).join("")); 

let takeOutAllLetter_Z = "Longz Livez Boomerz the dogz thatz boomsz";
let removeZ = /[^z+]+/gi; // 
log(takeOutAllLetter_Z.match(removeZ).join(""));

let firstWordOfSentence = "Machalites are something or someone...?";
let regexSearch1stWord = /^Machalites/gi;
log(firstWordOfSentence.match(regexSearch1stWord));//[ 'Machalites' ]
log(regexSearch1stWord.test(firstWordOfSentence))//;true//

//You can search the end of strings using the dollar sign character ( $ ) at the end of the regex. ( $ )

let endOftheWordStr = "This searches for the last word in a string";
let regexEndOfWord = /string$/g;
log(endOftheWordStr.match(regexEndOfWord));


//Match Characters that Occur One or More Times: ( + ) ////////////////////////////////////////////////////////////

let wordStr = "Mississipi";
let findAll_s = /s+/g;
log(wordStr.match(findAll_s));//[ 'ss', 'ss' ]

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /c+/gi;
log(crowd.match(reCriminals));//[ 'CCC' ]
let classMethodCriminals = /[c+]/gi;
log(crowd.match(classMethodCriminals));//[ 'C', 'C', 'C' ]

//Match Characters that Occur Zero or More Times: ( * ) /////////////////////////////////////////////////////////

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/g; // Change this line
let result = chewieQuote.match(chewieRegex);
log(result);//[ 'Aaaaaaaaaaaaaaaa' ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9]*>/gi; // 
log(text.match(myRegex));

// //Short hand character classes ( \W ) = [A-Za-z0-9_]
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. 
// This character class matches upper and lowercase letters plus numbers. 
// Note, this character class also includes the underscore character (_).

let characterClassesStr = "Count how many letters and numbers are in this string 45699";
let regexCharacterClass = /[\w+]/g;
log(characterClassesStr.match(regexCharacterClass).join(""));//Counthowmanylettersandnumbersareinthisstring45699
log(characterClassesStr.match(regexCharacterClass).length);//

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true









































































































