import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  companyName: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
  },
  contactPerson: {
    name: String,
    email: { type: String, require: true, index: true, unique: true, sparse: true },
    password: { type: String, require: true },
    phone: { type: String, require: true, index: true, unique: true, sparse: true },
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile', // Reference to the UserProfile model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});


const User = mongoose.model('User', userSchema);

export default User

