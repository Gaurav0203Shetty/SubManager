import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [100, 'Name must not exceed 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be positive']
    },
    status: {
        type: String,
        enum: ["active", "expired", "canceled"],
        default: "active"
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP", "INR"],
        default: "INR"
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
        type: String,
        enum: ["entertainment", "utilities", "food", "health", "sports", "editing", "other"],
        default: "other",
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
        validate:
            {
                validator: function (value) {
                    return value <= new Date();
                },
                message: "Start date cannot be in the future"
            }
    },
    renewalDate: {
        type: Date,
        validate:
            {
                validator: function (value) {
                    return value >= this.startDate;
                },
                message: "Renewal date must be after the start date"
            }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true, 
    },
}, { timestamps: true });

subscriptionSchema.pre('save', function (next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,      
            monthly: 30,
            yearly: 365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }
    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
