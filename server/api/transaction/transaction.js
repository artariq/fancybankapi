var transaction = require('./transaction.model');
var express = require('express');
var router = express.Router();

router.route('/transactions').get(function(req, res) {
	transaction.find(function(err, transactions) {
		if(err) {
			return res.send(err);
		}

		res.json(transactions);
	});
});

router.route('/transactions').post(function(req, res) {
	var transaction = new transaction(req.body);

	transaction.save(function(err) {
		if(err) {
			return res.send(err);
		}

		res.send({ message: 'transaction added' });
	});
});

// Update a single transaction

router.route('/transactions/:id').put(function(req, res) {
	transaction.findOne({ _id: req.params.id }, function(err, transaction) {
		if (err) {
			return res.send(err);
		}

		for (var prop in req.body) {
			transaction[prop] = req.body[prop];
		}

		//save the transaction
		transaction.save(function(err) {
			if(err) {
				return res.send(err);
			}

			res.json({ message: 'transaction updated' });
		});
	});
});

// Retrieve a single transaction

router.route('/transactions/:id').get(function(req, res) {
	transaction.findOne({ _id: req.params.id }, function(err, transaction) {
		if (err) {
			return res.send(err);
		}

		res.json(transaction);
	});
});

// Delete a single transaction

router.route('/transactions/:id').delete(function(req, res) {
	transaction.remove({
		_id: req.params.id
	}, function(err, movie) {
		if (err) {
			return res.send(err);
		}

		res.json({ message: 'Successfully deleted the transaction' });
	});
});

module.exports = router;