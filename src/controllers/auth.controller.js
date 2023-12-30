import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) => {

    const { userName, email, password, roles } = req.body

    const newUser = new User({
        userName,
        email,
        password: await User.encryptPassword(password),
    })
    const savedUser = await newUser.save()

    // {data saved, secret word, object config}
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 86400 /* 24 hours */ })
    res.status(200).json({ token })

    res.json('signUp')

}
export const signIn = async (req, res) => {
    res.json('signIn')
}
