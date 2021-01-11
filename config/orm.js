const connection = require("./connection.js")


const orm = {
    all: () =>{
        return connection.query("SELECT * FROM burgers");
    },
    add: (addObject) =>{
         return connection.query(`INSERT INTO burgers SET?`,addObject);
    },
    removeAll: (removeObject)=>{
        return connection.query(
            `DELETE FROM burgers
            WHERE ?;`, removeObject)
    },
    updateAll(updatedObject){
        return connection.query(
            `UPDATE burgers SET ? WHERE ?;`,updatedObject)
    }
    

}

//export orm
module.exports = orm;