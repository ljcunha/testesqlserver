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


    var conn = new Connection(config);

    conn.on('connect', function(err){
    var request = new Request("Select * from Barcodes",function(err,rowCount){
        if(err){
            console.log(err);
        }else{
            console.log(rowCount);
        }

        conn.close();
    });

    request.on('row', function(columns) {
        columns.forEach(function(column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            console.log(column.value);
          }
        });
     });

    request.on('done', function(rowCount, more) {
        console.log(rowCount + ' rows returned');
    });

    console.log(conn.execSql(request));

});




