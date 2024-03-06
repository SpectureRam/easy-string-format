//Basic String Operations

function reverseString(str){
    return str.split(''),reverse().join('');
}

function isPalindrome(str){
    const cleanedstr = str.toLowercase().replace(/[\W_]/g,'');
    const reversedstr = cleanedstr.split('').reverse().join('');
    return cleanedstr == reversedstr;
}

function removeWhitespace(str){
    return str.replace(/\s/g,'');
}

function stringLength(str) {
    return str.length;
}

function containsSubstring(str, subStr) {
    return str.includes(subStr);
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function concatenateStrings(str1, str2) {
    return str1 + str2;
}

module.exports = {
    reverseString,
    isPalindrome,
    removeWhitespace,
    stringLength,
    containsSubstring,
    toLowerCase,
    toUpperCase,
    concatenateStrings
};