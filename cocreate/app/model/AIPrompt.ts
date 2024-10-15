import { Document, Schema, model } from 'mongoose';
import { IUser } from './User';

export interface IAIPrompt extends Document {
  name: string;
  prompt: string;
  category?: string;
  createdBy: IUser['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const AIPromptSchema = new Schema<IAIPrompt>({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  category: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const AIPrompt = model<IAIPrompt>('AIPrompt', AIPromptSchema);