import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/model/User";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
        credentials: {
            email: { label: "Email", type: "text"},
            password: { label: "Password", type: "password" }
        },
        //returning user to the above method if the credentials are correct
        async authorize(credentials: any): Promise<any>{
            await dbConnect();
            try {
                const await User.findOne({
                    $or : [
                        {email: credentials.identifier},
                        {username: credentials.identifier}
                    ]
                })

                if(!user) throw new Error("No user found with this email")

                if (!user.isVerified) throw new Error("Please verify your account before loggin in")

                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)   

                if(isPasswordCorrect) {
                    return user
                }else{
                    throw new Error("Incorrect password")
                }
            } catch (err: any) {
                throw new Error(err)
            }
        }
    })
    ],
    pages: {
        signIn: "/signin",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.SECRET,
}