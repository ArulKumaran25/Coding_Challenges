function isPalinrome(s) {
    var cleanedString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}
console.log(isPalinrome("A man, a plan, a canal, panama"));
console.log(isPalinrome("Dad"));
console.log(isPalinrome("hello"));
