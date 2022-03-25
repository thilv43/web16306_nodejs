import User from "../models/user";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    try {
        
        const {name, email, password} = req.body;
        const extitUser = await User.findOne({email}).exec();
        if(extitUser) {
            res.json({
                message: "Tài khoản đã tồn tại, vui lòng đăng ký lại"
            })
        }
        const user = await new User({name, email, password}).save();
        res.json({
            user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            }
        })
    } catch (error) {
        res.status(400).json({
                message: "Không tạo được tài khoản"
            })
    }
}

export const signin = async ( req, res) => {

        const {email, password} = req.body;
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(401).json({
                message: "User không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(401).json({
                message: "Mat khau khong ton tai"
            })
        }
        const token = jwt.sign({email}, "123456", {expiresIn: 60 * 60});
        res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email

            }
        })
}
