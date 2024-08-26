after submitting this data
 {
    "companyName": "Tech Innovators Inc.",
    "contactPersonName": "John Doe",
    "contactPersonEmail": "johnn.doe@techinnovators.com",
    "contactPersonPassword": "password123",
    "contactPersonPhone": "+1-555-123-4567",
    "street": "1234 Innovation Way",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94107",
    "country": "USA"
  }
  the error below is getting displayed
  {
    "success": false,
    "status": 500,
    "message": "E11000 duplicate key error collection: sub-data.users index: contactPerson.email_1 dup key: { contactPerson.email: null }",
    "stack": "MongoServerError: E11000 duplicate key error collection: sub-data.users index: contactPerson.email_1 dup key: { contactPerson.email: null }\n    at InsertOneOperation.execute (C:\\Users\\rites\\OneDrive\\Desktop\\Logic Lounge\\Weave Your Web Here\\Internship\\subscription-manager\\api\\node_modules\\mongodb\\lib\\operations\\insert.js:51:19)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async executeOperation (C:\\Users\\rites\\OneDrive\\Desktop\\Logic Lounge\\Weave Your Web Here\\Internship\\subscription-manager\\api\\node_modules\\mongodb\\lib\\operations\\execute_operation.js:136:16)\n    at async Collection.insertOne (C:\\Users\\rites\\OneDrive\\Desktop\\Logic Lounge\\Weave Your Web Here\\Internship\\subscription-manager\\api\\node_modules\\mongodb\\lib\\collection.js:155:16)"
}
this is my auth route
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const industrialUserSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    contactPersonName: {
        type: String,
        required: true,
    },
    contactPersonEmail: {
        type: String,
        required: true,
        unique: true,
    },
    contactPersonPassword: {
        type: String,
        required: [true, 'Please Enter a Password'],
    },
    contactPersonPhone: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', industrialUserSchema);
export default User;

provide the correct code