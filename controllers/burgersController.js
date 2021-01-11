const express = require("express");

const router = express.Router();

const burgers = require("../models/burgers.js")



//html routes
router.get('/', (req,res)=>{
    res.render("index")
})

//api routes
router.post('/api/burgers', (req,res)=>{

})

router.put('api/burger/:id', (req, res)=>{

})

router.delete('/api/burgers', (req,res)=>{

})


// Export routes for server.js to use.
module.exports = router;