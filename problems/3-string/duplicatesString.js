function duplicateString(str){
    for(let i = 0; i <str.length-1;i++){
    let count = 1;
    if(str[i] != -1){
        for(let j=i+1; j < str.length;j++){
            if(str[i] == str[j]){
                count++;
                str[j]=-1;
            }
           
            }
             if(count > 1){
                console.log(`Duplicate Element ${str[i]}, Count = ${count}`);
        }    
    }
    
}
}

let str = 'Applle';
duplicateString(str);
// output:
// Duplicate Element p, Count = 2
// Duplicate Element l, Count = 2

/*
//Hash Table 
function findDuplicates(str) {
    let H = new Array(26).fill(0); // Initialize hash table with zeros
    const baseCharCode = 'a'.charCodeAt(0); // ASCII value of 'a'

    // Count frequency of each character
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - baseCharCode; // Map character to index
        H[index]++;
    }

    // Identify duplicates
    for (let i = 0; i < 26; i++) {
        if (H[i] > 1) {
            console.log(`Character '${String.fromCharCode(i + baseCharCode)}' appears ${H[i]} times`);
        }
    }
}

// Test the function
let str = "finding";
findDuplicates(str);

// Convert index to character: String.fromCharCode(i + baseCharCode)
*/