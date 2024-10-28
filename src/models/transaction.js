import mongoose, { mongo, Schema } from "mongoose";
const transactionSchema = new Schema ({
    bookingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Bookings"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    amountPaid:{
        type:Number,
    },
    paymentMethod:{
        type:String
    },
    status:{
        type:String,
        enum:[
            "Completed","Pending","Failed"
        ]
    },
},{
    timestamps:true
});
export default mongoose.model("Transactions",transactionSchema);