const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Create a new subscription
router.post('/', subscriptionController.createSubscription);

// Get all subscriptions
router.get('/', subscriptionController.getAllSubscriptions);

// Get a single subscription by ID
router.get('/:id', subscriptionController.getSubscriptionById);

// Edit a subscription by ID
router.put('/:id', subscriptionController.updateSubscription);

// Delete a subscription by ID
router.delete('/:id', subscriptionController.deleteSubscription);

module.exports = router;