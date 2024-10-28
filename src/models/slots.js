import mongoose, { Schema, Types } from "mongoose";
const slotSchema = new Schema({
    startTime:{
        type:Date
    },
    endDate:{
        type:Date
    },
    price:{
        type:Number
    },
    isBooked:{
        type:Boolean
    },
    bookedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
},{
    timestamps:true
});
export default mongoose.model("Slots",slotSchema);