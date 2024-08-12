const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Contact = require ('./contact');

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    dni: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
    contacts: [{ type: Schema.Types.ObjectId, ref: Contact, required: true }],
    
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);