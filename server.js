const express=require('express')
const app=express()

app.get('/ci',function(req,res){
  const p=parseFloat(req.query.p)
  const r=parseFloat(req.query.r)
  const t=parseFaloat(req.query.t)

  if(isNaN(p) || isNaN(r) || isNaN(t)){
    return res.status(400).json({
      msg: "invalid inputs"
    });
  }

  const ci=p * Math.pow((1 + r/ 100), t)

  res.send(ci.toFixed(2))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on", PORT);
});
