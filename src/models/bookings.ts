import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  slots: mongoose.Schema.Types.ObjectId[];
  clientId: mongoose.Schema.Types.ObjectId;
  TotalAmountPaid: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const bookingSchema = new Schema<IBooking>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  slots: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clients",
  },
  TotalAmountPaid: {
    type: Number,
  },
  status: {
    type: String,
  },
}, { timestamps: true });

const Booking: Model<IBooking> = mongoose.model<IBooking>("Bookings", bookingSchema);

export default Booking;
