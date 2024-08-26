import Router from 'express'
import { verifyToken } from './auth-route.js';
import { createError } from './create-error.js';
import UserProfile from '../models/profile-model.js';
import User from '../models/user-model.js';
const router = Router()
// Get User Data --> http://localhost:8000/api/users/:id
router.get('/:id', verifyToken, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userDetails = await User.findById(userId);
        if (!userDetails) return next(createError(404, 'User not found!'));
        const userProfile = await UserProfile.findOne({ user: userId })
            .populate('subscriptionPlan') // Populating subscriptionPlan field
            .exec();

        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        res.status(200).json({ userDetails, userProfile });
    } catch (err) {
        next(err);
    }
});
// Get User Details --> http://localhost:8000/api/users/:id/user-details
router.get('/:id/user-details', verifyToken, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userDetails = await User.findById(userId);
        if (!userDetails) return next(createError(404, 'User not found!'));
        res.status(200).json(userDetails);
    } catch (err) {
        next(err);
    }
});
// Update User Details (excluding email) --> http://localhost:8000/api/users/:id/update-user-details
router.put('/:id/update-user-details', verifyToken, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const { companyName, address, contactPerson, profile } = req.body;
        const user = await User.findById(userId);
        if (!user) return next(createError(404, 'User not found!'));
        if (companyName) user.companyName = companyName;
        if (address) {
            if (address.street) user.address.street = address.street;
            if (address.city) user.address.city = address.city;
            if (address.state) user.address.state = address.state;
            if (address.country) user.address.country = address.country;
            if (address.postalCode) user.address.postalCode = address.postalCode;
        }
        if (contactPerson) {
            if (contactPerson.name) user.contactPerson.name = contactPerson.name;
            if (contactPerson.password) user.contactPerson.password = contactPerson.password;
            if (contactPerson.phone) user.contactPerson.phone = contactPerson.phone;
        }
        if (profile) user.profile = profile;
        user.updatedAt = Date.now();
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
});
// Get User Profile --> http://localhost:8000/api/users/:id/user-profile
router.get('/:id/user-profile', verifyToken, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userProfile = await UserProfile.findOne({ user: userId })
            .populate('subscriptionPlan') // Populating subscriptionPlan field
            .exec();
        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        res.status(200).json(userProfile);

    } catch (err) {
        next(err);
    }
});
// Update User Profile --> http://localhost:8000/api/users/:id/update-user-profile
router.put('/:id/update-user-profile', verifyToken, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const { website, bio, gender } = req.body;
        const userProfile = await UserProfile.findOne({ user: userId })
            .populate('subscriptionPlan') // Populating subscriptionPlan field
            .exec();
        if (!userProfile) return next(createError(404, 'User profile not found!'));
        if (website) userProfile.website = website;
        if (gender) userProfile.gender = gender
        if (bio) userProfile.bio = bio
        const updatedProfile = await userProfile.save();
        res.status(200).json(updatedProfile);
    }
    catch (err) {
        next(err);
    }
})



export default router