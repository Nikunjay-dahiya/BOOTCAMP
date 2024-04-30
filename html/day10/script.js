const express = require('express');
// const fs = require('fs');

const fsPromises = require("fs/promises");
const userController = require('./controllers/userController');
const productRoute=  require('./routes/productsRoute');
const app = express(); 

 
app.use(express.json());

app.listen(1400);

// app.use((req,res,next)=>{
//     const time =new Date().toLocaleString();
//     fsPromises.appendFile("./log.txt",req.url+'\t'+time+'\n');
//     next();
// });

// constproductRouter =expressRouter();
// const userRouter = express.Router();


// app.use('/api/products',productRouter);
// app.use('/api/users',userRouter);

// productRouter.route('/')
// .get(productController.getAllProducts)
// .post(productController.addProducts);

// productRouter.route('/:id')
// .put(productController.getAllProducts)
// .delete(productController.addProducts);


// app.route('./api/products')
// .get(productController.replaceProduct)
// .post(productController.deleteProduct);

// app.route('./api/products:id')
// .put(productController.replaceProduct)
// .delete(productController.addProduct);


// app.route('./api/products:id')
// .get(userControllerController.replaceUser)
// .post(userController.addUser)
// .put(userController.replaceUser)
// .delete(userController.addUser);



// app.route('/api/product')
// .get()
// .post();

// app.route('/api/product')
// .put()
// .delete();

// app.route('/api/product')
// .get()
// .post()
// .put()
// .delete();


// app.get('/api/products',async(req,res)=>{
//     // const data = fs.readFileSync('./data.json',"utf8");
//    // const obj = JSON.parse(data);
//    const data =await fsPromises.readFile('./data.json',"utf8");
//    const arr = JSON.parse(data).products;
//     res.json({
//         status:'success',
//         result:arr.length,
//         data:{
//             product:arr
//         }
//     });
// });
// app.post('/api/products',async(req,res)=>{
// // console.log(Object.keys(req));
// // console.log(req.body);
// const data =req.body;
// data.id =121;
// console.log(data);
// const db = await fsPromises.readFile("./data.json","utf8");
// const arr= JSON.parse(db);
// const len = arr.length;
// const newProduct = data;
// if(len==0){
//     newProduct.id = 1;
// //     console.log(arr)
// //     arr.push(data);
// //     console.log(arr),
// //     fsPromises.writeFile("./data.json",JSON.stringify(arr));
// }
// else {
//     newProduct.id = (arr[len-1].id)+1;
//     // console.log(newProduct);
// }
// arr.push(newProduct);
// fsPromises.writeFile("./data.json",JSON.stringify(arr));

// // const newId =db[len-1];
// // res.s{
//     // end('work in progress');
// res.json({
//     status:'success',
//     results:1,
//     data:{
//         newProduct: newProduct,
//     }
// })
// });
// app.put('/api/products/:id',async(req,res)=>{
//     const arr= JSON.parse(await fsPromises.readFile("./data.json","utf8"));
//     // console.log(req);
//     res.send("work in progress....");
//     console.log(req.params);
//     const reqId = req.body;
//     const data = req.body;
//     data.id=reqId;
//     const newArr = arr.map((elem)=>{
//         if(elem.id==reqId)return data;
//         else return elem;
//     });
//     fsPromises.writeFile("./data.json",JSON.stringify(newArr));
//         res.json({
//             status:'success',
//             results:1,
//             data:{
//                 newProducts: data,
//             }
//         })
//     // console.log(data); 
// });
// app.delete('/api/products/:id',async(req,res)=>{
//     const arr= JSON.parse(await fsPromises.readFile("./data.json","utf8"));
//     const newArr = arr.filter((elem)=>{
//         if(elem.id === reqId)return false;
//         else return true;
//     });
//     fsPromises.writeFile("./data.json",JSON.stringify(newArr));
//     res.status(204);
//     res.json({
//         status: 'success',
//         data: {
//             newProduct: null,
//         }
//     })
// });
// app.get('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status: 'fail',
//         message: 'Route is not yet important',
//     });
// })
// app.post('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status: 'fail',
//         message: 'Route is not yet important',
//     });
// })
// app.put('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status: 'fail',
//         message: 'Route is not yet important',
//     });
// })
// app.delete('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status: 'fail',
//         message: 'Route is not yet important',
//     });
// })
