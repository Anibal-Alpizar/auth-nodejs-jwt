import { Schema, model } from 'mongoose'

const RoleSchema = new Schema({
    name: String,
}, {
    versionKey: false // <- remove __v property added by Mongoose
})

export default model('Role', RoleSchema)