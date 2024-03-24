import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandle } from "../utils/error.js";
import jwt from 'jsonwebtoken';





export const signgin = async (req, res, next) => {

    const { username , email, password } = req.body;

    if( !email || !password  || email === '' || password === ''){
        
       return next(errorHandle(400, 'all fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if(!validUser) {
            next(errorHandle(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
           return next(errorHandle(404, 'Invalid password'));
        }

        const token = jwt.sign({id: validUser._id, isEventManger: validUser.isEventManger}, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token', token, {
            httponly: true
        }).json(rest);
    } catch (error) {
        next(error);
    }


}

