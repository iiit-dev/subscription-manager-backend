import Router from 'express'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import User from '../models/user-model.js';
import { createError } from './create-error.js';
import UserProfile from '../models/profile-model.js';
const router = Router()
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, 'You are not authenticated!'));
    jwt.verify(token, 'secret-key', (err, user) => {
        if (err) return next(createError(403, 'Token is not valid!'));
        req.user = user;
        next();
    });
};
// Register --> http://localhost:8000/api/auth/register
router.post('/register', async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.contactPerson.password, salt);
    if (!req.body.contactPerson.email) { return createError(400, "Email is required") }
    try {
        const newUser = new User({
            companyName: req.body.companyName,
            address: {
                street: req.body.address.street,
                city: req.body.address.city,
                state: req.body.address.state,
                country: req.body.address.country,
                postalCode: req.body.address.postalCode,
            },
            contactPerson: {
                name: req.body.contactPerson.name,
                email: req.body.contactPerson.email,
                phone: req.body.contactPerson.phone,
                password: hash,
            },
        });
        const userDetails = await newUser.save();
        const userProfile = new UserProfile({
            user: userDetails._id,
            subscriptionPlan: []
        });
        await userProfile.save();
        res.status(200).json({ userDetails, userProfile });
    } catch (err) {
        next(err)
    }
});
// Login --> http://localhost:8000/api/auth/login
router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ 'contactPerson.email': req.body.email });
        if (!user) return next(createError(404, 'User with the given Email Not Found!!'))
        const correctPass = await bcrypt.compare(req.body.password, user.contactPerson.password)
        if (!correctPass) return next(createError(400, 'Wrong Password Or Username'))
        const token = jwt.sign({ id: user._id }, 'secret-key')
        res.cookie('access_token', token, { httpOnly: true }).status(200).send('You are logged in!')
    } catch (err) {
        next(err)
    }
});
// Logout --> http://localhost:8000/api/auth/logout
router.post('/logout', verifyToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return next(createError(404, 'User not found!'));
        }

        const email = user.contactPerson.email;
        res.clearCookie('access_token', { httpOnly: true })
            .status(200)
            .json({ message: `You have been logged out of ${email} successfully!` });
    } catch (err) {
        next(err);
    }
});
export default router;
export { verifyToken };
