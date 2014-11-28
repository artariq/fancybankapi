var account = require('./account.model');
var express = require('express');
var router = express.Router();

router.route('/accounts').get(function(req, res) {
	account.find(function(err, accounts) {
		if(err) {
			return res.send(err);
		}

		res.json(accounts);
	});
});

router.route('/accounts').post(function(req, res) {
	var account = new account(req.body);

	account.save(function(err) {
		if(err) {
			return res.send(err);
		}

		res.send({ message: 'account added' });
	});
});

// Update a single account

router.route('/accounts/:id').put(function(req, res) {
	account.findOne({ _id: req.params.id }, function(err, account) {
		if (err) {
			return res.send(err);
		}

		for (var prop in req.body) {
			account[prop] = req.body[prop];
		}

		//save the account
		account.save(function(err) {
			if(err) {
				return res.send(err);
			}

			res.json({ message: 'account updated' });
		});
	});
});

// Retrieve a single account

router.route('/accounts/:id').get(function(req, res) {
	account.findOne({ _id: req.params.id }, function(err, account) {
		if (err) {
			return res.send(err);
		}

		res.json(account);
	});
});

// Delete a single account

router.route('/accounts/:id').delete(function(req, res) {
	account.remove({
		_id: req.params.id
	}, function(err, movie) {
		if (err) {
			return res.send(err);
		}

		res.json({ message: 'Successfully deleted the account' });
	});
});

module.exports = router;