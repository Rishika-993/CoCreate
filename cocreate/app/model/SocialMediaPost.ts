import { Document, Schema, model } from 'mongoose';
import { IUser } from './User';

export interface ISocialMediaPost extends Document {
  content: string;
  platform: 'twitter' | 'instagram' | 'linkedin';
  author: IUser['_id'];
  status: 'draft' | 'posted' | 'failed';
  postDate?: Date;
  platformPostId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SocialMediaPostSchema = new Schema<ISocialMediaPost>({
  content: { type: String, required: true },
  platform: { type: String, enum: ['twitter', 'instagram', 'linkedin'], required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['draft', 'posted', 'failed'], default: 'draft' },
  postDate: Date,
  platformPostId: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const SocialMediaPost = model<ISocialMediaPost>('SocialMediaPost', SocialMediaPostSchema);
