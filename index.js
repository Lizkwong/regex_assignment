

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
regexmatch(/\s[.,;:]/, " ,");
regexmatch(/\w{6,}/, "congratulations");
regexmatch(/[^eE]/, "df");

// Quoting Style
let quoteRegex = /(?<!\w)'(.*?)(?!\w)\g;/
console.log( "He said to her 'why are you so mean?' Dont be rude.")
// Number Again
let numRegex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
console.log(1E10);

