const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  monthlyIncome: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);