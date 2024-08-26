import mongoose from 'mongoose';
const userProfileSchema = new mongoose.Schema({
  website: String,
  bio: String,
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  createdAt: { type: Date, default: Date.now, },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updatedAt: { type: Date, default: Date.now, },
  subscriptionPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubPlan' }]
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;
