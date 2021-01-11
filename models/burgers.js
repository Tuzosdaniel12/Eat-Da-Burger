const orm = require("../config/orm.js")

const burgers = {
    async read () {
        return await orm.read("burgers")
    },
    async create (addObject){
        return await orm.create(["burgers", addObject])
    },
    async delete (removeObject){
        return await orm.delete(["burgers", removeObject])
    },
    async update (updateObject){
        return await orm.update(["burgers", updateObject])
    }   
}

//export orm
module.exports = burgers;