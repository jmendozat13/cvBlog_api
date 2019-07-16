import { Schema, model } from 'mongoose';
import Progressbar from "./Progressbar"

model['Progressbar'] = Progressbar

const toolSchema = Schema({
    name: {
        type: String,
        required: true
    },
    progressbar: model["Progressbar"].schema
})

export default model('Tool', toolSchema)