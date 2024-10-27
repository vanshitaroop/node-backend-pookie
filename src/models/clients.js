import mongoose, { Schema } from "mongoose";
import courts from "./courts";
const clientSchema = new Schema(
  {
    name: {
      type: String,
    },
    contactInfo: {
      mobileNumber: {
        type: Number,
        email: String,
      },
    },
    location: {
      type: String,
    },
    courts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courts" }],
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Clients",clientSchema);