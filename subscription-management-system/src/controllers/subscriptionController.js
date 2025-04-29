const Subscription = require('../models/Subscription');

// Display all subscriptions
exports.index = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.render('subscriptions/index', { subscriptions });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Show form to create a new subscription
exports.create = (req, res) => {
    res.render('subscriptions/create');
};

// Handle creating a new subscription
exports.store = async (req, res) => {
    const { phoneNumber, age, monthlyIncome, plan, cost, startDate, endDate } = req.body;
    try {
        const newSubscription = new Subscription({
            phoneNumber,
            age,
            monthlyIncome,
            plan,
            cost,
            startDate,
            endDate
        });
        await newSubscription.save();
        res.redirect('/subscriptions');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Show form to edit an existing subscription
exports.edit = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        res.render('subscriptions/edit', { subscription });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Handle updating an existing subscription
exports.update = async (req, res) => {
    const { phoneNumber, age, monthlyIncome, plan, cost, startDate, endDate } = req.body;
    try {
        await Subscription.findByIdAndUpdate(req.params.id, {
            phoneNumber,
            age,
            monthlyIncome,
            plan,
            cost,
            startDate,
            endDate
        });
        res.redirect('/subscriptions');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Handle deleting a subscription
exports.destroy = async (req, res) => {
    try {
        await Subscription.findByIdAndDelete(req.params.id);
        res.redirect('/subscriptions');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};