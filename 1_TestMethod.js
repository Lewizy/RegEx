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
log(quoteSample.match(myRegex));

//Negated character sets ( ^ ) [caret]: ////////////////////////////////////////////////////////////////////////////
// Note that characters like ., !, [, @, / 
// and white space are matched - the negated vowel character set only excludes the vowel characters.
let takeAwayAllVowels = "This sentence shall have no vowels.";
let removeVowelsRegex = /[^aeiou0-9]/gi; 
log(takeAwayAllVowels.match(removeVowelsRegex).join("")); //Ths sntnc shll hv n vwls.

let takeOutAllLetter_Z = "ThisZ ZsentenceZz ZshallZz Zhave Znoz Zz";
let removeZ = /[^z+]+/gi; // 
log(takeOutAllLetter_Z.match(removeZ).join(""));//This sentence shall have no 

let firstWordOfSentence = "Machalites are something or someone...?";
let regexSearch1stWord = /^Machalites/gi;
log(firstWordOfSentence.match(regexSearch1stWord));//[ 'Machalites' ]
log(regexSearch1stWord.test(firstWordOfSentence))//;true//

//You can search the end of strings using the dollar sign character ( $ ) at the end of the regex. ( $ )

let endOftheWordStr = "This searches for the last word in a string";
let regexEndOfWord = /string$/g;
log(endOftheWordStr.match(regexEndOfWord));


//Match Characters that Occur One or More Times: ( + ) //////////////////////////////////////////////////////////////////////
let wordStr = "Mississipi";
let findAll_s = /s+/g;
log(wordStr.match(findAll_s));//[ 'ss', 'ss' ]

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /c+/gi;
log(crowd.match(reCriminals));//[ 'CCC' ]
let classMethodCriminals = /[c+]/gi;
log(crowd.match(classMethodCriminals));//[ 'C', 'C', 'C' ]


//Match Characters that Occur Zero or More Times: ( * ) //////////////////////////////////////////////////////////////////////
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/g; // Change this line
let result = chewieQuote.match(chewieRegex);
log(result);//[ 'Aaaaaaaaaaaaaaaa' ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9]*>/gi; // 
log(text.match(myRegex));

// //Short hand character classes ( \w ) = [A-Za-z0-9_] or "Alphanumerics" ////////////////////////////////////////////////////////
let characterClassesStr = "Count how many letters and numbers 12345 are in this string";
let regexCharacterClass = /[\w+]/g;
log(characterClassesStr.match(regexCharacterClass).join(""));//Counthowmanylettersandnumbersareinthisstring45699
log(characterClassesStr.match(regexCharacterClass).length);//49

let removeSpecialCharecters = "This $sentenc%e &is sha#$%ll Ha&*ve Only& lette#rs ans num@bers 123";
let regexRemoveCharacters = /\w+/g;
log(removeSpecialCharecters.match(regexRemoveCharacters).join(""));//ThissentenceisshallHaveOnlylettersansnumbers123


// Match Everything that is non-alphanumeric ( \W ) = [!@#$%^&*(])_+{}:"|>?<[>-] : 
// You can search for the opposite of the \w with \W. : Note, the opposite pattern uses a capital letter. 
let displayNonAlphanumerics = "Thi$s $sen%tanc^e s&hal*l ha@ve only non-al+pha!2nu^m$er%ics";
let regexDisplayNonAlphas = /[\W]/g;
log(displayNonAlphanumerics.match(regexDisplayNonAlphas).join(""));//$ $%^ &* @  -+!^$%


//Match all numbers with ( \d ) = [0-9] /////////////////////////////////////////////////////////////////////////////////////
let displayallNumbers = "How much money is in this sentances $5.00";
let regexGetNumbers = /\d/g;
log(displayallNumbers.match(regexGetNumbers)); //[ '5', '0', '0' ]

// Match all non-numbers with ( \D ) = [A-Za-z][!@#$%^&*(])_+{}:"|>?<[>-]
let displayNonDigits = "There 4 shall 3 be 2 no 1 numbers 0 here ";
let regexNonNumeric = /\D/g;
log(displayNonDigits.match(regexNonNumeric).join(""));// There shall be no numbers here 


//Match all white spaces ( \s ) /////////////////////////////////////////////////////////////////////////////////////////////
let checkAllWhiteSpaces = "Display white spaces in this sentence";
let regexDisplayWhiteSpace = /\s/g;
log(checkAllWhiteSpaces.match(regexDisplayWhiteSpace).length); //5


//Match all non-spaces ( \S )///////////////////////////////////////////////////////////////////////////////////////////////
let checkNonSpaces = "Display non-spaces in this sentence 12345!@#%^&*(*";
let regexNonSpace = /\S/g;
log(checkNonSpaces.match(regexNonSpace).length); //45


//Quantity Specifiers ( { , } )///////////////////////////////////////////////////////////////////////////////////////////////
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
log(ohRegex.test(ohStr));//true

let haStr = "Hazzzzah";
let haRegex = /Hazz{3,}ah/; // Change this line
log(haRegex.test(haStr)); //Hazzzzah

let timStr = "Timmmmber";//four m's
let timRegex = /Tim{4}ber/g; // Change this line
log(timRegex.test(timStr));//Timmmmber

//Match optional elements ( ? )//////////////////////////////////////////////////////////////////////////////////////////////////
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

let favWord = "favorite";
let favRegex = /favo\w?rite/; // Change this line
log(favRegex.test(favWord));

//Look-aheads: Positive (?= ...) negetives (?! ...)/////////////////////////////////////////////////////////////////////////////

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//The repalce medthod ( replace( regex, replaceAnyText ) )//////////////////////////////////////////////////////////////////////////

let replaceString = "Replace the word \'jumla'\ from this text";
let regexReplace =/jumla/;
let replaceWithThisText = "Nordstrum"
log(replaceString.replace(regexReplace,replaceWithThisText));
//Replace the word 'Nordstrum' from this text

"Reverse word".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "word Reverse"
































//CHALLENGES: ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Regular Expressions: Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /\w\D\d*/; // Change this line
log(userCheck.test(username));


//Regular Expressions: Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+(.+?)\s+$/ig; // Change this line
let result = hello.replace(wsRegex,'$1'); // Change this line





