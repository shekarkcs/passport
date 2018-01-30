var express = require("express");
var router  = express.Router();

router.use('/',function(req,res,next){
    console.log("login");
    res.render('index',{title: 'Login Page'});
});

module.exports = router;