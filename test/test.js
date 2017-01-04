var assert = require("assert");
var should = require('should');
var selffun = require('../service/model.js');
var log4js = require('log4js');
log4js.configure({
    appenders: [
    {
		type: 'console' ,
	    category:"console"
	},
    {
        type: 'dateFile',
        filename: 'logs/pattern_yyyy-MM-dd.log',
        //filename: "blah.log",
        pattern: "-yyyy-MM-dd",
        maxLogSize: 1024,
        alwaysIncludePattern: false,
        backups: 4,
        category: 'normal'
    },
  ],
  replaceConsole: true
});

var logger = log4js.getLogger('normal');
describe('hooks', function() { 
before(function() { 
// runs before all tests in this block 
}); 
after(function() { 
// runs after all tests in this block 
});
 beforeEach(function() { 
 // runs before each test in this block 
 }); 
 afterEach(function() { 
 // runs after each test in this block 
 }); 
 it('test',function(done){ //test here 
     done();
 }) 
 });



describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});


describe('mysql', function() {
    describe('#fun()', function() {
        it('mysql数据库连接测试', function(done) {
          selffun.fun(function(rows){	  
			  // res.set('Content-Type', 'text/json');
			  //logger.info(rows);
			  assert.equal(rows.length>0,true);	
			  done();			  
			});	
        });
		/*
		it("should return empty set of tags", function(done)
		{
			done(new Error("Some error message here"));
		});
		*/
    });
});
