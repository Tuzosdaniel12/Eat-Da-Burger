const connection = require("./connection.js")


const orm = {
    all: tableName =>{
        return connection.query("SELECT * FROM ??",tableName);
    },
    add: addObject =>{
         return connection.query(`INSERT INTO ?? SET ?`,addObject);
    },
    removeAll: (removeObject)=>{
        return connection.query(`DELETE FROM ?? WHERE ?;`,removeObject)
    },
    updateAll(updatedObject){
        return connection.query(`UPDATE ?? SET ? WHERE ?;`,updatedObject)
    }

}

//export orm
module.exports = orm;