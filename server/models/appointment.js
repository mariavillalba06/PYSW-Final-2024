const mongoose = require('mongoose');
const {Schema} = mongoose;
const Doctor = require ('./doctor');
const Patient = require ('./patient');

const AppointmentSchema = new Schema({
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: Date, required: true },
    illness: { type: String, required: true },
    paymentType: { type: String, required: true },
    room: { type: String, required: true },
    paid: { type: Boolean, required: true },
    status: { type: String, required: true },
    patient: { type: Schema.Types.ObjectId, ref: Patient, required: true },
    doctor: { type: Schema.Types.ObjectId, ref: Doctor, required: true }
});

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);