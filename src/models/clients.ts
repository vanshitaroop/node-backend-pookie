import mongoose, { Schema, Document, Model } from "mongoose";
import { ICourt } from "./courts";  // Assuming there's an ICourt interface in the "courts" module

// Define the IClient interface
export interface IClient extends Document {
  name: string;
  contactInfo: {
    mobileNumber: number;
    email: string;
  };
  location: string;
  courts: mongoose.Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the client schema
const clientSchema = new Schema<IClient>(
  {
    name: {
      type: String,
    },
    contactInfo: {
      mobileNumber: {
        type: Number,
      },
      email: {
        type: String,
      },
    },
    location: {
      type: String,
    },
    courts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courts",  
      },
    ],
  },
  {
    timestamps: true,  
  }
);

const Client: Model<IClient> = mongoose.model<IClient>("Clients", clientSchema);

export default Client;
