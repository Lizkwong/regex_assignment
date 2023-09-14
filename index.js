// let anBot = /ca/;
// console.log(anBot.match(...'cat car'));
//  Reading Note
//  .test returns a boolean which tells you whether the string contains a match or not 

function regexmatch(word, str){
    if(word.test(str)){
        console.log(`"${str}" matches the Regular Expression.`);
    }else{
        console.log(`"${str}" does not match the Regular Expression.`);
    }
}
regexmatch(/ca[rt]/, "cat");
regexmatch(/pr?[op]/, "prop");
regexmatch(/ferr(et|y|ari)/, "ferrari");
regexmatch(/.ious/, "vicious");
regexmatch(/\s[.,;:]/, ",");
regexmatch(/\w{6,}/, "congratulations");
regexmatch(/[^eE]/, "df");

// Quoting Style
let quoteRegex = /(?<!\w)'(.*?)(?!\w)\g;/
console.log( "He said to her 'why are you so mean?' Dont be rude.")
// Number Again
let numRegex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
console.log(1E10);

// Question 1
// let regexTest = /ca[rt]/;
// console.log(regex.test('car cat'));

// let arr = ['car', 'cat'];
// let object = /ca/;

// let output = arr.forEach(many => {
//   console.log(object.test(many))
// })


// Question 2
// let pWord = /po/;
// console.log(pWord.test('pop prop'));

// let pArray = ['pop','prop'];
// let pWord = /po/;
// let result = pArray.forEach(alpha => {
//   console.log(pWord.test(alpha))
// })

// Question 3
// // let fWord = /fr/;
// // console.log(fWord.test('ferret ferry ferrari'));

// let fArray = ['ferret','ferry','ferrari'];
// let fWord = /fe/;
// let output = fArray.forEach(beta => {
//   console.log(fWord.test(beta))
// })


// Question 4
// let vowel = /ious/;
// console.log(vowel.test('malicious loquacious concious'));

// let vowelArray = ['malicious', 'loquacious', 'concious'];
// let vowel = /ious/;
// let output = vowelArray.forEach(beta => {
//   console.log(vowel.test(beta))
// })

// Question 5
// let specialChar = / .,:;/;
// console.log(specialChar.test('what is the reason do not have your own peace of mind, you should never give up.'));

// let charArray = ['what is the reason do not have your own peace of mind? you should never give up.'];
// let specialChar = / .,:;/;
// let output = charArray.forEach(beta => {
//   console.log(specialChar.test(beta))
// })

// let arr = ['bat', 'cat', 'pet', 'pEd', 'peek'];
// let regular = /\b[^eE\s]+\b/;

// let output = arr.forEach(word => {
//   console.log(regular.test(word));
// });


