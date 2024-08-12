const mongoose = require('mongoose');
const {Schema} = mongoose;
const Administrative = require ('./administrative');

const NewSchema = new Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    date : {type:Date, required: true},
    img:{type:String, required: true},
    type: {type:String, enum: ['new', 'blog','campaña', 'taller'], required: true},
    admin: {type: Schema.Types.ObjectId, ref: Administrative, required: true}
})
 module.exports = mongoose.models.New || mongoose.model('New', NewSchema);