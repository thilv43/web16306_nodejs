import mongoose from "mongoose";
import {createHmac} from "crypto";
import {v4 as uudiv4} from "uuid";

const userSchema =mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 30
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    salt: {
        type: String,
    }
    
},{timestamps: true});

userSchema.methods = {
    authenticate(password){
        return this.encryptPassword(password) == this.password;
    },
    encryptPassword(password){
        console.log('password', password)
        if(!password) return;
        try {
            return createHmac("sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function save(next){
    try {
        this.salt = uudiv4();
        this.password = this.encryptPassword(this.password);
        return next();
    } catch (error) {
        return next(error);
    }
})


export default mongoose.model("User", userSchema);