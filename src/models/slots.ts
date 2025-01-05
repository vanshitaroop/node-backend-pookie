import mongoose, { Schema, Document, Model } from "mongoose";

// Define the ICourt interface
export interface ICourt extends Document {
  name: string;
  type: string;
  clientId: mongoose.Schema.Types.ObjectId;
  pricePerSlot: number;
  totalSlots: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the court schema
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
      ref: "Client",  // Reference to the Client collection
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
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Court model with the ICourt interface
const Court: Model<ICourt> = mongoose.model<ICourt>("Courts", courtSchema);

export default Court;
