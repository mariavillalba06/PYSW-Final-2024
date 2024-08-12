const mongoose = require('mongoose');
const {Schema} = mongoose;
const ContactSchema = new Schema({
    type: {type:String, required: true},
    value: {type:String, required: true}, 
})
 module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);