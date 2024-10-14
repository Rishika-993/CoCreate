import { Document, Schema, model } from 'mongoose';
import { IUser } from './User';

export interface IUserActivity extends Document {
  user: IUser['_id'];
  activityType: 'login' | 'logout' | 'create_post' | 'edit_post' | 'delete_post';
  details?: any;
  timestamp: Date;
}

const UserActivitySchema = new Schema<IUserActivity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  activityType: { type: String, enum: ['login', 'logout', 'create_post', 'edit_post', 'delete_post'], required: true },
  details: Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now }
});

export const UserActivity = model<IUserActivity>('UserActivity', UserActivitySchema);