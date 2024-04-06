import express from 'express';
const server = express();
server.use(express.json());

server.listen(5000, () => {
   console.log('Server is running on port 5000');
})
server.get("/burger", (req, res) => {
   res.json({
      name: "Burger",
      price: 50,
      Type:"Cheese Burger"
   })
})
   server.get("/Pizza", (req, res) => {
     res.json({
      name:"Pizza",
      Price:200,
      Type:"Chilli Paneer Pizza"
     })

   })
   server.get("/food",(req,res)=>{
      
      const{menu,quantity,price,varient} =req.query;
      const{user,country,age}=req.headers;

      const total=parseInt(quantity)*parseInt(price);

      res.json({
        message: `you have ordered ${quantity} ${varient} ${menu}`,
        bill:`Total bill is ${total}`,
        details:`You are ${user} from ${country} & you are ${age} years old.`
      })
   })
   server.get("/foodtype/:Type",(req,res)=>{
     const{Type}=req.params;
     if(Type==="veg"){
      return(
         res.json({
            message:"You have Ordered Veg Food"
         })
      )
     }else{
      res.json({
         message:"You have Ordered Non-veg Food"
      })
     }
           res.json({
         message:"You have Ordered Food"
      })
   })
server.post("/user",(req,res)=>{
   console.log(req.body);
   const{name,email,age,course}=req.body;
   res.json({
      message:`${name} you have successfully enrolled for course ${course}`,
      email:`Your email id is ${email}`,
      age:`${age}`
   })
})
