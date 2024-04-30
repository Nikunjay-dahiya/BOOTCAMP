// // function sum(a,b){
// //     console.log(a+b);
// // }
// // sum(2,3);
// // // module.exports = sum;

// const sum =function(a,b){
//     console.log(a+b);
// }
// const mul = function(a,b){
//     console.log(a+b);
// }
// module.exports = {
//     fn1:sum,
//     fn2:mul,
// };

var figlet = require("figlet");

figlet("Hello World   ! !", function (err, data) {
 
  console.log(data);
});
function getApi(){
    const pr=fetch('https://api.github.com/users/deepak3440');
    const data=await pr.json();
        console.log(pr);
    
}
getApi();
