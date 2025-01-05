import mongoose, { Schema, Document, Model } from "mongoose";


export interface IUser extends Document {
  username?: string;
  password?: string;
  role?: string;
  mobileNumber: number;
  OTP?: string;
  uid?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String },
  password: { type: String },
  role: { type: String },
  mobileNumber: { type: Number, unique: true },
  OTP: { type: String },
  uid: { type: String }
}, { timestamps: true });


const User: Model<IUser> = mongoose.model<IUser>("Users", userSchema);

export default User;
