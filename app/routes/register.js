var express = require("express");
var router  = express.Router();

router.use('/register',function(req,res,next){
    res.render('register',{title: 'Register'});
});

module.exports = router;