function towerOfHanoi(n,a,b,c){
    if(n > 0){
        towerOfHanoi(n-1,a,c,b);
        console.log(`${a} -> ${c}`);
        towerOfHanoi(n-1,b,a,c);
    }
}

let n = 3;
// let A = 1;
// let B = 2;
// let C = 3;
let a = 'A';
let b = 'B';
let c = 'C';
towerOfHanoi(n,a,b,c);
/*
7 times call
 1 -> 3
 1 -> 2
 3 -> 2
 1 -> 3
 2 -> 1
 2 -> 3
 1 -> 3

 A -> C
 A -> B
 C -> B
 A -> C
 B -> A
 B -> C
 A -> C
*/