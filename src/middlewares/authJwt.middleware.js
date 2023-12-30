import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/User.js'
// have token? 
// verify if the user is admin, moderator or user

export const verifyToken = async (req, res, next) => {
    try {

        // 1. Recieve token from headers
        const token = req.headers["x-access-token"]

        // 2. Check if token exists in headers
        if (!token) return res.status(403).json({ message: "No token provided" }) // 403 : forbidden

        // 3. But if token exists, decode it
        const decoded = jwt.verify(token, config.SECRET) // config.SECRET help us to decode the token

        // 4. Check if user exists in database (with decoded id)
        const user = await User.findById(decoded.id)

        // 5. Check if user exists in database
        if (!user) return res.status(404).json({ message: "No user found" })

        // 6. If user exists, go to next middleware
        next()
    }
    catch (error) {
        res.status(401).json({ message: "Unauthorized" })
    }
}