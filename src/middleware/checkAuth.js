import expressJWT from 'express-jwt'

export const checkAuth = (req , res , next) => {
    const admin = true;
    if(admin){
        next();
    }
    else{
        res.redirect("/")
    }
}

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms: ["HS256"],
    RequestProperty: "auth" //req.auth
});

export const isAuth = (req, res, next) => {
    console.log(req.auth);
    console.log(req.profile);
    const user = req.profile._id == req.auth._id;
    if(!user) {
        return res.status(402).json({
            message: "ban khong dc phep truy cap"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if(req.profile.role == 0) {
        return res.status(401).json({
            message: "ban khong phai la admin"
        })
    }
    next();
}