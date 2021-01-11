const orm = require("../config/orm.js")

const burgers = {
    async all () {
        return await orm.all("burgers")
    },
    async add (addObject){
        return await orm.add(["burgers", addObject])
    },
    async delete (removeObject){
        return await orm.add(["burgers", removeObject])
    },
    async update (addObject){
        return await orm.add(["burgers", addObject])
    }   
}

//export orm
module.exports = burgers;