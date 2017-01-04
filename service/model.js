var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '192.168.20.147',
    user: 'root',
    password: 'root',
    database:'estar',
    port: 3306
});

var fun= function  model(callback){
	//global.logger.info("---------------index");	
	conn.connect();
	conn.query('SELECT * from estar_user', function(err, rows, fields) {
		if (err) throw err;
		if (callback)
		{
			callback(rows);
		}
		else{
			global.logger.info(JSON.stringify(rows));
		}
		
	});
	conn.end();
}

module.exports={
	fun:fun
};