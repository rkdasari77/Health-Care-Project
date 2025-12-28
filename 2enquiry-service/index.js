const express = require("express");
const app = express();
app.use(express.json());

app.post("/enquiry", (req,res)=>{
  console.log("New enquiry received:");
  console.log(req.body);

  res.json({
    status:"received",
    message:"We received your enquiry"
  });
});

app.listen(4003, ()=> console.log("Enquiry service on 4003"));
