// console.log('Hello');

const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./data.json","utf8");
const url =require('url');
const dataObj = JSON.parse(data).products;
const product = dataObj.products;
const inputElement =`
<form action ='/product'>
<input type="text"  name="productName">
<button type="submit">search</button>
</form>
`
// console.log(data);

const cardTemplate =`
<div class = 'product-card'>
<h3>$TITLE$</h3>
<img src = "$img_src$" alt = 'product-image'/>
<a href = "$product_link$">More Info</a>


</div>
`;

let result = [];
for(let i=0; i<dataObj.length;i++){
    let temp = cardTemplate;
    temp = temp.replace('$TITLE$',dataObj[i].title);
    temp = temp.replace('$img_src$',dataObj[i].images[0]);
    // temp = temp.replace('price',dataObj[i].price);

    // temp = temp.replace('$product_link$',/product?id=${i});
result.push(temp);
}
result = result.join('');
//  console.log(result);
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/html',
    });
    // const route = req.url;
    // console.log('/n',route,'\n');

    const path = url.parse(req.url);
    const pathname = path.pathname;
    const q = path.query;
    // const path = url.parse(req.url).pathname;
    //console.log('\n',path,'\n');
    if(pathname ==='/home'){
        // console.log(result)
        // console.log(inputElement)
        res.end(inputElement+result);
    }
    else if(pathname === '/about'){
        res.end('I am nikunjay');
        // const id= q.id;
        // const pName =q.productName;
        // if(id){

        // }
        // else if(pName){
        //     res.end(pName);
        // }
        // else{
        //     res.end('<h3>error...</h3')
        // }
    }
    else if(pathname === '/product'){
        // const id = q.id;
        const pName = q.productName;
       
        if(pName){
            // res.end(pName);
            const searchNameResults = dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                }
                else{
                    false;
                }
            })
            res.end(JSON.stringify(searchNameResults));
        }
        else{
res.end('<h3>Error....</h3>')   
     }
    //     const item = dataObj[id];
    //     res.end(
    //        ` <div>
    //             <h4>${item.title}</h4>
    //             <img src = "${item.thumbnail}">
    //             <p>${item.description}</p>
    //         </div>
    //    ` );
    }
    
    else {
        res.end("404...not found");
    }

//  res.end(result);

});
server.listen(2000,()=>{
    console.log(".......Server Started.....");
});