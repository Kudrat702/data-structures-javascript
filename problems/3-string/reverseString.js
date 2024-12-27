function reverseString(str){
    let arr = str.split('');
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        //Swap 
        let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
    }
        return arr.join('');
}

let str = 'Apple';
console.log(reverseString(str));
//output:
//elppA

/*
Note:
JavaScript are immutable, meaning you cannot modify 
them directly by assigning to their indices like str[i] = str[j]. 
To reverse a string, you need to first convert it into an array,
perform the swapping operations, and then join the array back into a string.

1.String to Array Conversion: str.split('')
converts the string into an array of characters.

2.Array to String Conversion: arr.join('')
converts the array back into a string.
*/