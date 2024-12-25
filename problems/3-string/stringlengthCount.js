function stringLength(str){
    let count = 0;
    //for( let char of str)
    for(let i = 0; i < str.length ; i++)
    {
        count++;
    }
    return count;
}

let str = 'welcome';
console.log("String Length" , + stringLength(str));
// output:
// String Length 7
