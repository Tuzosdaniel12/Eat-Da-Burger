const connection = require("./connection.js")


const orm = {
    all: tableName =>{
        return connection.query("SELECT * FROM ??",tableName);
    },
    add: addObject =>{
         return connection.query(`INSERT INTO ?? SET ?`,addObject);
    },
    delete: removed=>{
        return connection.query(`DELETE FROM ?? WHERE ?;`,removed)
    },
    update: updated=>{
        return connection.query(`UPDATE ?? SET ? WHERE ?;`,updated)
    }

}

//export orm
module.exports = orm;