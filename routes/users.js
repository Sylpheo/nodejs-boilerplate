var router = require('express').Router();

router.route('/users')
    .get(function(req, res){
        /* TODO: use models for retrieve from database
        *   example:
        *   var User = require('./../models/user);
         *   User.findAll(function(err, users){
        *       if (err) return res.status(500).send('there is an error')
    *           res.send({users: users});
    *       });
        * */
        return res.send('Users route with get method');
    });

router.route('/users/:id')
    .get(function(req, res) {
       return res.send('User route with get method on id: '+ req.params.id);
    });

module.exports = router;