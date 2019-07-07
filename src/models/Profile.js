import { Schema, model } from 'mongoose';

const profileSchema = Schema({
    fullName: {
        type: String,
        min: 3,
        max: 250,
        required: true
    },
    urlImage: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        min: 3,
        max: 250,
        required: true
    },
    email: {
        type: String,
        min: 5,
        max: 100,
        required: true
    },
    phoneNumber: {
        type: String,
        min: 5,
        max: 15,
        required: true
    },
    objectives: {
        type: String,
        required: true
    }
})

export default model('Profile', profileSchema)