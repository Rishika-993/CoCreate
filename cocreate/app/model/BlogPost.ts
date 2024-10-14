import { Document, Schema, model } from 'mongoose';
import { IUser } from './User';
import { ITag } from './Tag';

export interface IBlogPost extends Document {
  title: string;
  content: string;
  author: IUser['_id'];
  collaborators: IUser['_id'][];
  tags: ITag['_id'][];
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  collaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const BlogPost = model<IBlogPost>('BlogPost', BlogPostSchema);