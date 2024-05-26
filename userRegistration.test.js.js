const request = require('supertest');
const app = require(__dirname,'../app'); 
describe('User Registration', function() {
    it('should register a new user', function(done) {
        request(app)
            .post('/register')
            .send({ /* данные нового пользователя */ })
            .expect(302) // Ожидаем перенаправление
            .end(function(err, res) {
                if (err) return done(err);
                console.log(res.headers.location); // Выводим место, куда было перенаправление
                done();
            });
    });

    it('should reject registration with invalid data', function(done) {
        request(app)
            .post('/register')
            .send({ /* неверные данные пользователя */ })
            .expect(302) // Ожидаем перенаправление
            .end(function(err, res) {
                if (err) return done(err);
                console.log(res.headers.location); // Выводим место, куда было перенаправление
                done();
            });
    });
});

