var request = require('supertest');
var cookieParser = require('cookie-parser');
var log4js = require('log4js');
log4js.configure({
    appenders: [
    {
		type: 'console' ,
	    category:"console"
	},
    {
        type: 'dateFile',
        filename: 'pattern_yyyy-MM-dd.log',
        //filename: "blah.log",
        pattern: "-yyyy-MM-dd",

        maxLogSize: 1024,
        // "pattern": "-yyyy-MM-dd",
        alwaysIncludePattern: false,

        backups: 4,
        category: 'normal'
    },
  ],
  replaceConsole: true
});
var logger = log4js.getLogger('normal');

var agent = request('https://kyfw.12306.cn');//设定协议、域名、端口。
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

describe('request.agent(leftTicket)', function(){
it('index leftTicket', function(done){
	
	var date="2017-01-24";
	agent.get('/otn/leftTicket/queryA?leftTicketDTO.train_date='+date+'&leftTicketDTO.from_station=TJP&leftTicketDTO.to_station=CXH&purpose_codes=ADULT')
	.set('Cookie', 'JSESSIONID=0A02F023C48854D2ECB7FA5AEFD81A3A15CC8F9979; __NRF=E14C8830BE0A7EF8179E18EFA29AC1D2; _jc_save_detail=true; BIGipServerotn=602931722.50210.0000; current_captcha_type=Z; _jc_save_fromStation=%u5929%u6D25%2CTJP; _jc_save_toStation=%u6EC1%u5DDE%2CCXH; _jc_save_fromDate=2017-01-24; _jc_save_toDate=2017-01-11; _jc_save_wfdc_flag=dc').expect(200).end(function(err, res){	
	
	
            if (err) return done(err);
			var data= JSON.parse(res.text).data;
			logger.info(data);	
			if(data){
				for(var i in data)
				{
					
					 var info= data[i].queryLeftNewDTO.ze_num;	
					 //console.info(info);	
					
					 if (!(info==='无' || info==="--"))
					 {
						console.info(info);	
						logger.info(info);	
					 }
				}				
			}
			//{"validateMessagesShowId":"_validatorMessage","status":true,"httpstatus":200,"messages":[],"validateMessages":{}}
            done();
			/*
			agent.get('/otn/leftTicket/queryA?leftTicketDTO.train_date=2017-01-24&leftTicketDTO.from_station=TJP&leftTicketDTO.to_station=CXH&purpose_codes=ADULT')
				.set('Cookie', '__NRF=CB95E7760BBF279F411C974798C98B38; JSESSIONID=0A01E81B60282391DDC29C8B682187B7E9178F8815; _jc_save_detail=true; BIGipServerotn=468189450.24610.0000; current_captcha_type=Z; _jc_save_fromStation=%u5929%u6D25%2CTJP; _jc_save_toStation=%u6EC1%u5DDE%2CCXH; _jc_save_fromDate=2017-01-24; _jc_save_toDate=2017-01-10; _jc_save_wfdc_flag=dc').expect(200).end(function(err, res){	
					console.info(res.text);
					//{"validateMessagesShowId":"_validatorMessage","status":true,"httpstatus":200,"messages":[],"validateMessages":{}}
					done();
				});
			*/
        });
});




//回调函数会直接抛出异常。
/*
it('say get', function(done){
	agent.get('/say_hello').expect(404,function(err){//向http://localhost:5555/say_hello
	    console.info(err);
		//发送GET请求。自定义返回结果的处理。
		done();
	});
});
 */
 
});
