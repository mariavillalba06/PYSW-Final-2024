const mongoose = require('mongoose');
const {Schema} = mongoose;
const User = require ('./user');

const PatientSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: User, required: true }
});


module.exports = mongoose.models.Patient || mongoose.model('Patient', PatientSchema);