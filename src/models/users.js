
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    mobileNumber: {
        type: Number,
        unique: true
    },
    OTP:{
        type:String
    }
},{
    timestamps:true
})
export default mongoose.model("Users",userSchema);