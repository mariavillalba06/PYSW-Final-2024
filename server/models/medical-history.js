const mongoose = require('mongoose');
const {Schema} = mongoose;
const Doctor = require ('./doctor');
const Patient = require ('./patient');

const MedicalHistorySchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: Patient, required: true }, 
    doctor: { type: Schema.Types.ObjectId, ref: Doctor, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    treatment: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: { type: String, enum: ['ongoing', 'completed'], required: true },
    notes: { type: String }
})
 module.exports = mongoose.models.MedicalHistory || mongoose.model('MedicalHistory', MedicalHistorySchema);