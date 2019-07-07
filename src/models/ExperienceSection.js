import { Schema, model } from 'mongoose';

const itemSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

const Item = model('Item', itemSchema)
model['Item'] = Item

const experienceSectionSchema = Schema({
    experienceId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
        min: 1,
        max: 50
    },
    type: {
        type: String,
        required: true,
        min: 1,
        max: 10
    },
    items: [model["Item"].schema]
})

export default model('ExperienceSection', experienceSectionSchema)