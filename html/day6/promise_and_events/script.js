// console.log('hello');
// const arr=[1,2,33];

// const ans=arr.forEach((a)=>{
//     console.log(a);
//     return a*2;
// });
// const ans2=arr.map(a=>Math.pow(a,2));



// const ans3=arr.map(a=>a**2);
// console.log(ans);
// // console.log(ans2);
// // console.log(ans3);

// const arr=[22,33,44];

// const ans =arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })


// console.log(arr);
// // console.log(ans);
// const arr=[
//     'delhi',
//     // 'mumbai',
//     // 'chennai',
//     // 'kolkata',
//     // 'pube',
//     // 'russia',
//     // 'usa',
//     // 'modinagar',
//     // 'ghaziabad',
//     // 'india']
//     // const ans=arr.filter((s)=>{
//     //     if(s.includes('i') || s.includes('I')){
//     //         return true;
//     //     }
//     // else{
//     //      false;
//     // }    });
//     // console.log(ans);



const arr=[1,22,33,345];

const ans= arr.reduce((a,b,c,d)=>{
    console.log(a,b,c,d);
    return a+b;
});
console.log(ans);



