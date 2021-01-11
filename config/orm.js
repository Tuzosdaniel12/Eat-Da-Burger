const connection = require("./connection.js")


const orm = {
    read: tableName =>{
        return connection.query("SELECT * FROM ??",tableName);
    },
    create: addObject =>{
         return connection.query(`INSERT INTO ?? SET ?`,addObject);
    },
    delete: removed=>{
        return connection.query(`DELETE FROM ?? WHERE ?;`,removed)
    },
    update: updated=>{
        console.log(updated)
        return connection.query(`UPDATE ?? SET ? WHERE ?;`,updated)
    }

}

//export orm
module.exports = orm;