var express = require('express');
var router = express.Router();
const users = [{
            id: 1,
            name: 'Vasya',
            age: 18
        },
        {
            id: 2,
            name: 'Petua',
            age: 20
        }
    ]
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { users: users });
});
router.get('/users/:id', (req, res) => {
    res.render('user', { users: users[req.params.id - 1] });
});
router.get('/users/', function(req, res, next) {
    res.render('users', { users: users });

});
router.get('/articles', (req, res) => {
    res.render('articles', { users: users });
});

module.exports = router;