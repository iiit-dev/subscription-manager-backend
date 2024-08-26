import { Router } from 'express';
import SubPlan from '../models/sub-model.js'
import UserProfile from '../models/profile-model.js'
import { verifyToken } from './auth-route.js';
const router = Router();
// CREATE A PLAN --> http://localhost:8000/api/subscriptions/:id/create-plan
router.post(
    '/:id/create-plan', verifyToken, async (req, res, next) => {
        try {
            const { planName, planCode, planDescription, trialLength, pricingModel, pricePerBillingPeriod } = req.body;
            const profileId = req.params.id;
            const newPlan = new SubPlan(
                {
                    planName, planCode, planDescription, trialLength, pricingModel, pricePerBillingPeriod,
                    profile: profileId,
                }
            )
            await newPlan.save()
            const profile = await UserProfile.findById(profileId);
            console.log('Profile:', profile); // Log the profile object
            if (!profile) {
                console.log('User Profile not found!');
                return res.status(404).json({ message: 'User Profile not found!' });
            }
            await UserProfile.findByIdAndUpdate(
                profileId,
                { $push: { subscriptionPlan: newPlan._id } },
                { new: true }
            );
            const userProfilePlans = await UserProfile.findById(profileId).populate('subscriptionPlan');
            res.status(200).json(userProfilePlans);
        }
        catch (err) {
            next(err)
        }
    }
)
// GET A PLAN --> http://localhost:8000/api/subscriptions/:id
router.post('/:id', async (req, res, next) => {
    try {
        const subs = await SubPlan.find({})
        res.send(200).json(subs)
    }
    catch (err) {
        next(err)
    }
})

export default router;
