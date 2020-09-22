function isPalindrome(string) {
    let len = Math.floor(string.length / 2);
    for (let i = 0; i < len; i++)
        if (string[i] !== string[string.length - i - 1])
            return false;
    return true;
}

console.log(isPalindrome('tenet'))
console.log(isPalindrome('Alyra'))