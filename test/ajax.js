
var request = require('supertest');
var agent = request('http://127.0.0.1:3000');//设定协议、域名、端口。

describe('request.agent(ajax)', function(){
it('index get', function(done){
	agent.get('/').expect(200, function(res){//向http://localhost:5555/发送GET请求，预期
	 // console.log(res);                      //状态码为200，回调函数对异常进行处理。不设置
	  done();
	});  
});
//回调函数会直接抛出异常。
it('say get', function(done){
	agent.get('/say_hello').expect(404,function(err){//向http://localhost:5555/say_hello
	    console.info(err);
		//发送GET请求。自定义返回结果的处理。
		done();
	});
});
 
});