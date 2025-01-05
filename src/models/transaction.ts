import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITransaction extends Document {
  bookingId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  amountPaid: number;
  paymentMethod: string;
  status: "Completed" | "Pending" | "Failed";
  createdAt?: Date;
  updatedAt?: Date;
}

const transactionSchema = new Schema<ITransaction>(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bookings",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    amountPaid: {
      type: Number,
    },
    paymentMethod: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Completed", "Pending", "Failed"],
    },
  },
  {
    timestamps: true,
  }
);

const Transaction: Model<ITransaction> = mongoose.model<ITransaction>("Transactions", transactionSchema);

export default Transaction;
