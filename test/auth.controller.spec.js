 const request = require('supertest')
 const User = require('../models/user')
 const express = require('express')
 const sequelize = require('../database/db')
 const app = express()


 // a helper function to make a POST request.
    function post(url, body){
    const httpRequest = request(app).post(url);
    httpRequest.send(body);
    httpRequest.set('Accept', 'application/json')
    httpRequest.set('Origin', 'http://localhost:8080')
    return httpRequest;
  }

 describe ('User Signup', () => {
     beforeEach((done) => {
        //  User.destroy({truncate:true})
        User.sync({foce: true})
            .then(() => {
                done()
            })
            .catch(error => {
              done(error)
            })
     })
     afterAll((done) => {
         app.close()
     })
     it ( 'Registers a user',  (done) => {
        const user = {
            email: 'some@mail.com',
            password: 'sam3ple3dw2',
            username: 'supremede'
        }
        post('/auth/user/signup', user)
        .expect(201)
        done()
     })
     it('fails to register when invalid data is provided', (done) => {
         const invalidData = {
             password:'',
             username: 'samp',
             email:'mail@server.com'
         }
         post('/auth/user/signup', invalidData)
               .expect(400)
               done()
     })
 })