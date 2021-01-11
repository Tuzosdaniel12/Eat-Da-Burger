const express = require("express");

const router = express.Router();

const burgers = require("../models/burgers.js")



//html routes
router.get('/', async (req,res)=>{
    burgersRes = await burgers.all("burgers");
    console.log(burgersRes)
    res.render("index",{burger:burgersRes})
})

//api routes
router.post('/api/burgers', (req,res)=>{

})

router.put('api/burger/:id', (req, res)=>{

})

router.delete('/api/burgers:id', (req,res)=>{

})


// Export routes for server.js to use.
module.exports = router;