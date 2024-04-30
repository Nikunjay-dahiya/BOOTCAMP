// let arr=[2,3,4,55,2];
// function printPretty(elem){
//     console.log(':',elem);
// }
// function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//         printPretty(arr[i]);

//     }
//     arr.forEach(printPretty);


// }
// printArray(arr);
// function printArray{
// Array.forEach((a)=>{
//     console.log(':',a,b,c);
// });
// }
// // printArray(arr);
// console.log('GEC Start');
// function printPretty(){
//     console.log('prettyStart');
//     let ans =2+3;
//     console.log(ans);
//     console.log('prettyEnd');

// }
// setTimeout( printPretty,10000);
// console.log('GEC End');


console.log('Start');

const req=fetch('https://dummyjson.com/products/1');
const res=req.then(res=>res.json())
res.then((data)=>console.log(data));

console.log('End');