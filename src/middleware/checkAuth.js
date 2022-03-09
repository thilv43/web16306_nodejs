exports.checkAuth = (req , res , next) => {
    const admin = true;
    if(admin){
        next();
    }
    else{
        res.redirect("/")
    }
}