import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/Role.js'

export const signUp = async (req, res) => {

    const { userName, email, password, roles } = req.body

    const newUser = new User({
        userName,
        email,
        password: await User.encryptPassword(password),
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } }) // find roles in database
        newUser.roles = foundRoles.map(role => role._id) // save roles ids in newUser

    } else {
        const role = await Role.findOne({ name: "user" }) // if roles are not specified, assign user role by default
        newUser.roles = [role._id]
    }


    const savedUser = await newUser.save()

    console.log(savedUser)

    // {data saved, secret word, object config}
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 86400 /* 24 hours */ })
    res.status(200).json({ token })


}
export const signIn = async (req, res) => {
    res.json('signIn')
}
