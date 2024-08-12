const mongoose = require('mongoose');
const {Schema} = mongoose;
const User = require ('./user');

const DoctorSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: User, required: true },
    license: { type: String, required: true },
    specialty: { type: String, required: true }
});
 module.exports = mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);