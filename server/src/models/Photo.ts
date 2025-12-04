import { Schema, model, Document, Types } from "mongoose";

export interface IPhoto extends Document {
  owner: Types.ObjectId;
  url: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
}

const photoSchema = new Schema<IPhoto>(
  {
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    url: { type: String, required: true },
    title: { type: String }
  },
  { timestamps: true }
);

export default model<IPhoto>("Photo", photoSchema);
