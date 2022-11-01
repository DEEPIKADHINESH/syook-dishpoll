const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors())
let user=[
    {
      "id": 1,
      "username": "amar",
      "password": "amar123"
    },
    {
      "id": 2,
      "username": "akbar",
      "password": "akbar123"
    },
    {
      "id": 3,
      "username": "antony",
      "password": "antony123"
    },
    {
      "id": 4,
      "username": "john",
      "password": "john123"
    },
    {
      "id": 5,
      "username": "paul",
      "password": "paul123"
    }
  ]
app.get("/login",(req,res)=>{
  const login=user.find(c=>c.username===(req.params.username))
  if(!login) return ("error")
  res.send(login)
}
   
)
app.listen(8080,()=>{
    console.log("Server started running")
})