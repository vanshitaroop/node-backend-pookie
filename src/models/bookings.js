import mongoose, { mongo, Schema } from "mongoose";
const bookingSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    slots:[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ],
    clientId:{
        type:mongo.Schema.Types.ObjectId,
        ref:"Clients"
    },
    TotalAmountPaid:{
        type:Number
    },
    status:{
        type:String
    }
});
export default mongoose.model("Bookings",bookingSchema);