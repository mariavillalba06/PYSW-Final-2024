const mongoose = require('mongoose');
const {Schema} = mongoose;

const AdministrativeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: User, required: true },
    active : {type:Boolean, required: true},
})

 module.exports = mongoose.models.Administrative || mongoose.model('Administrative', AdministrativeSchema);