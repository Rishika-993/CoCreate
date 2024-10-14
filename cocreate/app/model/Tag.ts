import { Document, Schema, model } from 'mongoose';

export interface ITag extends Document {
  name: string;
  category?: string;
  usageCount: number;
}

const TagSchema = new Schema<ITag>({
  name: { type: String, required: true, unique: true },
  category: String,
  usageCount: { type: Number, default: 0 }
});

export const Tag = model<ITag>('Tag', TagSchema);