import mongoose, { Schema, Document } from 'mongoose';     //importing Document due to typescript type safety

// //defining interface in typescript

// export interface Blog extends Document {
//     content: string;    //string in typescript starts with a lowercase while in mongoose it starts with an uppercase
//     CreatedAt: Date
// }

// constant BlogSchema: Schema<Blog> = new Schema({})

// export interface User extends Document {
//     username: string;
//     email: string;
//     password: string;
//     verifyCode: string;
//     verifyCodeExpiry: Date;

// }

import { ISocialMediaPost } from './SocialMediaPost';
import { IBlogPost } from './BlogPost';

interface ISocialMediaAccount {
  connected: boolean;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiry?: Date;
}

export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  name?: string;
  bio?: string;
  avatar?: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  socialMediaAccounts: {
    twitter: ISocialMediaAccount;
    instagram: ISocialMediaAccount;
    linkedin: ISocialMediaAccount;
  };
  createdAt: Date;
  lastLogin?: Date;
  posts?: IBlogPost['_id'][];
  socialMediaPosts?: ISocialMediaPost['_id'][];
}

const userSchema = new Schema<IUser>({
  email: { 
    type: String, 
    required: [true, "Please provide a email"], 
    unique: true 
  },
  password: { 
    type: String, 
    required:  [true, "Please provide a password"],
  },
  username: { 
    type: String, 
    required: [true, "Please provide a username"],
    unique: true
  },
  name: String,
  bio: String,
  avatar: String,
  socialMediaAccounts: {
    twitter: {
      connected: { type: Boolean, default: false },
      accessToken: String,
      refreshToken: String,
      tokenExpiry: Date
    },
    instagram: {
      connected: { type: Boolean, default: false },
      accessToken: String,
      refreshToken: String,
      tokenExpiry: Date
    },
    linkedin: {
      connected: { type: Boolean, default: false },
      accessToken: String,
      refreshToken: String,
      tokenExpiry: Date
    }
  },
  createdAt: { type: Date, default: Date.now },
  lastLogin: Date
});

export const User = (mongoose.models.users) || mongoose.model<IUser>('users', userSchema);