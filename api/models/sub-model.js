import mongoose from 'mongoose';
const planSchema = new mongoose.Schema({
    planName: { type: String, required: true, },
    planCode: { type: String, required: true },
    planDescription: { type: String },
    trialLength: { type: String, enum: ['No Trial', '7 days', '14 days', '21 days', '28 days'], required: true, },
    pricingModel: { type: String, enum: ['Fixed', 'Ramp'], required: true, },
    pricePerBillingPeriod: { type: String, required: true, },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' },
    createdAt: { type: Date, default: Date.now, },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const SubPlan = mongoose.model('SubPlan', planSchema);
export default SubPlan