//1.Push method to add end of the array.
let array = [1,2,3];
array.push(4);
console.log(array);

//output = [ 1, 2, 3, 4 ]

//2.Multiple push method
array.push(5,6,7,8);
console.log(array);

//output =[1, 2, 3, 4, 5, 6, 7, 8] 

//3.Use-splice():Adding an element at a specific index. insert 3 at index 2.
let array1 = [1,2,4];
array1.splice(2,0,3); //(index,deleteCount,element)
console.log("Add 3 at index 2 = " + array1);

//output: [1,2,3,4]

//4.Adding/Insert element at the start use Unshift() method.
array1.unshift(0);
console.log("Add 0 at start = " + array1);

//output: Add 0 at start = 0,1,2,3,4
