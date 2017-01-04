var request = require('supertest')
  , express = require('express');
var assert = require("assert");
var app = express();

app.get('/user', function(req, res){
  res.status(200).send({ name: 'tobi' });  
});

/*
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
	 assert.equal(true,true);	
  });
 */ 
  describe('GET /user', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

