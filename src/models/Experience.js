import { Schema, model } from 'mongoose'
import ExperienceSection from './ExperienceSection'
import Company from './Company'

model['ExperienceSection'] = ExperienceSection
model['Company'] = Company

const experienceSchema = Schema({
    profileId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    position: {
        type: String,
        max: 250,
        min: 10,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    endDate: {
        type: Date,
        required: false
    },
    present: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        max: 800,
        min: 10,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    company: model["Company"].schema,
    experienceSection: [model["ExperienceSection"].schema]
})

export default model('Experience', experienceSchema)