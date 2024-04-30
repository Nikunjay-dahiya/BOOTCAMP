const getAllProducts= async(req,res)=>{
    // const data = fs.readFileSync('./data.json',"utf8");
   // const obj = JSON.parse(data);
   const data =await fsPromises.readFile('./data.json',"utf8");
   const arr = JSON.parse(data).products;
    res.json({
        status:'success',
        result:arr.length,
        data:{
            product:arr
        }
    }
)
}

module.exports = { 
    getAllProducts
}
