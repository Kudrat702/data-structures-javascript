/*
A-65 a-97    difference A-a = 97-65 = 32
B-66 b-98    difference B-b = 97-65 = 32
|

|
Z-90 z-122   difference Z-z = 97-65 = 32

Logic:

str[i] = str[i]+32;
str[W] = W+32 = w.

Explanation:

Direct Addition: str[i].charCodeAt(0) + 32 converts the character to its ASCII value and adds 32.

Character Reconstruction: String.fromCharCode() reconstructs the new character from the updated ASCII value.

*/
//UpperCase to LowerCase
function toLowerCase(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        newStr += String.fromCharCode(str.charCodeAt(i) + 32);
    }
    return newStr;
}

let str = 'WELCOME';
console.log("Change Case:", toLowerCase(str));

// LowerCase to UpperCase
function toUpperCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        // Convert by subtracting 32 from the ASCII value of the character
        newStr += String.fromCharCode(str.charCodeAt(i) - 32);
    }
    return newStr;
}

let str = 'welcome';
console.log("Uppercase:", toUpperCase(str));

//toggleCase(uppercase becomes lowercase, and lowercase becomes uppercase)
function toggleCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        // Check if the character is lowercase
        if (charCode >= 97 && charCode <= 122) {
            newStr += String.fromCharCode(charCode - 32); // Convert to uppercase
        } 
        // Check if the character is uppercase
        else if (charCode >= 65 && charCode <= 90) {
            newStr += String.fromCharCode(charCode + 32); // Convert to lowercase
        } 
        // Keep other characters unchanged
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

let str = 'we5lCome';
console.log("Toggle Case:", toggleCase(str));

