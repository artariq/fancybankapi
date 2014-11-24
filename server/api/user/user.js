var User = require('./user.model');
var express = require('express');
var router = express.Router();

router.route('/users').get(function(req, res) {
	User.find(function(err, users) {
		if(err) {
			return res.send(err);
		}

		res.json(users);
	});
});

router.route('/users').post(function(req, res) {
	var user = new User(req.body);

	user.save(function(err) {
		if(err) {
			return res.send(err);
		}

		res.send({ message: 'User added' });
	});
});

// Update a single user

router.route('/users/:id').put(function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err) {
			return res.send(err);
		}

		for (var prop in req.body) {
			user[prop] = req.body[prop];
		}

		//save the user
		user.save(function(err) {
			if(err) {
				return res.send(err);
			}

			res.json({ message: 'User updated' });
		});
	});
});

// Retrieve a single user

router.route('/users/:id').get(function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err) {
			return res.send(err);
		}

		res.json(user);
	});
});

// Delete a single user

router.route('/users/:id').delete(function(req, res) {
	User.remove({
		_id: req.params.id
	}, function(err, movie) {
		if (err) {
			return res.send(err);
		}

		res.json({ message: 'Successfully deleted the user' });
	});
});

module.exports = router;
