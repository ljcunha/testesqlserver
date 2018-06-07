const Connection = require('tedious').Connection;
var Request = require('tedious').Request;

const config = {
    userName: 'Developer',
    password: 'Katana07',
    server: 'Midgard',
    database: 'DbCanI',
    options: {
        instance: 'sqlexpress',
        encrypt: true
    }
}

function execQuery(sql){
    var conn = new Connection(config); 
    conn.on('connect',function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Connected.");
            var req = new Request(sql,function(err){
                if(err){
                    console.log(err);
                }
            });
            var result = '';
            req.on('row',function(columns){
                columns.forEach(column => {
                    if(column.value != null){
                        result += column.value + ";";
                    }
                });
                console.log(result);
                conn.close();
                return result.value;
            });
        }
    });   
}

module.exports = function(sql){
    return execQuery(sql);
}