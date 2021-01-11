const express = require("express");

const router = express.Router();

const burgers = require("../models/burgers.js")



//html routes
router.get('/', async (req,res)=>{
    burgersRes = await burgers.read("burgers");
    console.log(burgersRes)
    res.render("index",{burger:burgersRes})
})

//api routes
router.post('/api/burgers', async (req,res)=>{
    const burger = req.body

    burgerRes = await burger.create(burger);

    res.json({ id: result.insertId })

})

router.put('api/burger/:id', async (req, res)=>{

})

router.delete('/api/burgers:id',async  (req,res)=>{

})


// Export routes for server.js to use.
module.exports = router;