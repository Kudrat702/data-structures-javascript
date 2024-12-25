function comparingString(a,b){
    for(let i = 0,j=0; i < a.length, j < b.length; i++,j++ ){
        if(a[i] == b[j]){
            console.log('String is Same');
        }else{
            console.log('String is not Same');
        }
    }
}
// const a = "Painter";
// const b = "Painting";
//comparingString(a,b);
// output:
// String is Same
// String is Same
// String is Same
// String is Same
// String is Same
// String is not Same
// String is not Same
// String is not Same

function compareStringsB(a, b) {
    // Compare character by character
    for (let i = 0; i < a.length && i < b.length; i++) {
        if (a[i] !== b[i]) {
            console.log("Strings are Not Same");
            return; // Exit function after detecting a mismatch
        }
    }

    // Check if the lengths are the same after character comparison
    if (a.length === b.length) {
        console.log("Strings are Same");
    } 
}

const a = "Painter";
const b = "Painting";
compareStringsB(a, b);
// output:
// Strings are Not Same
