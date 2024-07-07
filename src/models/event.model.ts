import mongoose, { Document, Schema, Model } from "mongoose";
import { EventProps } from "../interface/event/event";

export interface EventDocument extends EventProps, Document {}

interface EventModel extends Model<EventDocument> {}

const eventSchema = new Schema<EventDocument, EventModel>({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  finished: { type: Boolean, default: false },
});

const Event = mongoose.model<EventDocument, EventModel>("Event", eventSchema);

export { Event, EventModel };
