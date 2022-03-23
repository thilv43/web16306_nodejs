import User from "../models/user";

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