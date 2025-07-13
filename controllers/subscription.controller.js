import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ... req.body,
            user: req.user._id
        })

        res.status(201).json({
            success: true,
            message: 'Subscription created successfully',
            data: subscription
        });
    } catch (e) {
        next(e);
    }
};

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if(req.user.id !== req.params.id) {
            const error = new Error("Unauthorized access");
            error.statusCode = 403;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });

        res.status(200).json({
            success: true,
            message: 'Subscriptions retrieved successfully',
            data: subscriptions
        });
    } catch (error) {
        next(error);
    }
}

export const getAllSubscriptions = async (req, res, next) => {
    try {
        const subscriptions = await Subscription.find();

        res.status(200).json({
            success: true,
            message: 'All subscriptions retrieved successfully',
            data: subscriptions
        });
    } catch (error) {
        next(error);
    }
}

export const getSubscriptionDetails = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id);

        if (!subscription) {
            const error = new Error("Subscription not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'Subscription details retrieved successfully',
            data: subscription
        });
    } catch (error) {
        next(error);
    }
}