var app = require('../app');
var request = require('supertest');
 
describe('router testing', function () {
    it('site root response', function (done) {
        request(app)
            .get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
			.expect(function(res){
				//console.info(res.body)
			})
            .end(function(err, res){
                if (err) throw err;				
                done();
            });
    });
});
