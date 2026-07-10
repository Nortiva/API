const router = require("express").Router();


router.get("/",(req,res)=>{


res.json({

empresa:"Nortiva",

status:"online",

version:"1.0.0"

});


});



module.exports = router;