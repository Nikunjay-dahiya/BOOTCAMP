 
//  setTimeout(()=>{console.log('Timeout...')},5000)
//  console.log('start');

// setTimeout(()=>{console.log('Timeout...')},4000)
// console.log('intermediate')
// console.log('end')

// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=>{console.log('Timeout...')},0)    
// }    setTimeout(()=>{console.log('Timeout...')},0)    

// function makePayment(orderID){
//     console.log(orderID);
// }
// createOrder('soap',makePayment);



// const pr= new Promise((resolve,reject)=>{
// // new Promise((resolve,reject)=>{
//     if(true){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });
// console.log(pr);




// setTimeout(() => {
    
//  console.log('first timeout...')},0);
// const pr=new Promise((resolve,reject)=>{

//     setTimeout(() => {
        
//     }, resolve(123));
// });
// console.log(pr);
// pr.then((res)=>{
//     // console.log(res);.catch((err)=>{
//         console.log(err);
//     })


//     setTimeout(function abc()){
//         console.log('i am one')
//     }