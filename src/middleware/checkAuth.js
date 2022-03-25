import express from "express";

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
    RequestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    console.log(req.auth)
}