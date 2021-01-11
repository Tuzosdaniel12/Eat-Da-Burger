const express = require("express");

const router = express.Router();

const burgers = require("../models/burgers.js")



//html routes
router.get('/', async (req,res)=>{
    burgersRes = await burgers.read("burgers");

    res.render("index",{burger:burgersRes})
})

//api routes
router.post('/api/burgers', async (req,res)=>{
    const burger = req.body

    const burgerRes = await burgers.create(burger);

    res.json({ id: burgerRes.insertId })

})
//update from devour to devoured
router.put('/api/burgers/:id', async (req, res)=>{
    const id = req.params.id
    const {devoured} = req.body
    console.log(devoured, id)

    const result = await burgers.update(
        {devoured:devoured},
        {id:id}
        );

    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
})

router.delete('/api/burgers/:id',async  (req,res)=>{

})


// Export routes for server.js to use.
module.exports = router;