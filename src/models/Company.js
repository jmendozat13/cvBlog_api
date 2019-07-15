import { Schema, model } from 'mongoose';
const companySchema = Schema({
    name: {
        type: String,
        max: 250,
        min: 3,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: true
    }

})

export default model('Company', companySchema)