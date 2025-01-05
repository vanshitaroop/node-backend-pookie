import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICourt extends Document {
  name: string;
  type: string;
  clientId: mongoose.Schema.Types.ObjectId;
  pricePerSlot: number;
  totalSlots: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const courtSchema = new Schema<ICourt>(
  {
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
  },
  {
    timestamps: true, 
  }
);

const Court: Model<ICourt> = mongoose.model<ICourt>("Courts", courtSchema);

export default Court;
