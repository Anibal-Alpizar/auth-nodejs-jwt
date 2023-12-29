import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [{
        ref: "Role", // <- relation to Role model
        type: Schema.Types.ObjectId // <- get only the _id from Role model
        // {name: "admin", _id: "5f8f9d0a4d9c7a2b6c7d0b7a"}
        // {name: "moderator", _id: "5f8f9d0a4d9c7a2b6c7d0b7b"} 
    }]
}, {
    timestamps: true, // <- add createdAt and updatedAt automatically
    versionKey: false // <- remove __v from the database
})

export default model('User', userSchema)