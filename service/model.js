var mysql = require('mysql');
var async = require('async')

var conn = mysql.createConnection({
    host: '192.168.20.147',
    user: 'root',
    password: 'root',
    database:'estar',
    port: 3306
});

var fun= function  model(callback){
	//global.logger.info("---------------index");	
	
	callback([]);
		
	var count1 = 0;
	async.whilst(
		function() { return count1 < 3 },
		function(cb) {
			log('1.1 count: ', count1);
			count1++;
			setTimeout(cb, 1000);
		},
		function(err) {
			// 3s have passed
			log('1.1 err: ', err); // -> undefined
		}
	);
	

	/*
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
	*/
}

module.exports={
	fun:fun
};