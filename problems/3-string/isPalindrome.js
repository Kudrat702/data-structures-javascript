function isPalindrome(str){
    for(let i = 0; i<str.length/2;i++){
        n = str.length; //length of String = 4;
        //Compare reverse String
        if(str[i] != str[n-1-i]){
            return false;
        }
    }
    return true;
}

const str = 'noom';
console.log(isPalindrome(str));

/*
n - 1 - i:
    The expression n - 1 - i is used to compare the i-th character from 
    the start of the string with the i-th character from the end of the string.

    This calculates the index of the character at the i-th position from the end of the string.
    For example:
        When i = 0: n - 1 - i = 3, comparing str[0] ('n') with str[3] ('m').
        When i = 1: n - 1 - i = 2, comparing str[1] ('o') with str[2] ('o').

    1.Access the characters from the end of the string to compare with characters from the start.
*/