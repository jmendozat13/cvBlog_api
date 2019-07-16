import { Schema, model } from 'mongoose';
import Tool from "./Tool"

model['Tool'] = Tool

const skillSchema = Schema({
    name: {
        type: String,
        required: true,
        max: 90,
        min: 2
    },
    profileId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    order: Number,
    type: {
        type: String,
        required: true
    },
    tools: [model["Tool"].schema]
})

export default model('Skill', skillSchema)