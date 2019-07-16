import { Schema, model } from 'mongoose';
const ProgressbarSchema = Schema({
    theme: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    valuenow: {
        type: Number,
        required: true
    },
    valuemin: {
        type: Number,
        required: true
    },
    valuemax: {
        type: Number,
        required: true
    }

})

export default model('Progressbar', ProgressbarSchema)