import mongoose from "mongoose";
import { Schema } from "mongoose";
const courtSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  pricePerSlot: {
    type: Number,
  },
  totalSlots: {
    type: Number,
  },
},{
    timestamps:true
});
export default mongoose.model('Courts',courtSchema);
