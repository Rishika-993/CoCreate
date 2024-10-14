import { Document, Schema, model } from 'mongoose';
import { IUser } from './User';
import { IBlogPost } from './BlogPost';

export interface ICollaborationRights extends Document {
  blog: IBlogPost['_id'];
  user: IUser['_id'];
  rights: 'view' | 'edit';
  invitedBy: IUser['_id'];
  invitedAt: Date;
}

const CollaborationRightsSchema = new Schema<ICollaborationRights>({
  blog: { type: Schema.Types.ObjectId, ref: 'BlogPost', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rights: { type: String, enum: ['view', 'edit'], required: true },
  invitedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  invitedAt: { type: Date, default: Date.now }
});

export const CollaborationRights = model<ICollaborationRights>('CollaborationRights', CollaborationRightsSchema);