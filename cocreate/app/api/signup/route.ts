import dbConnect from "@/app/lib/dbConnect";
import { User } from "@/app/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/app/helpers/sendVerificationEmail";

export async function POST(request: Request){
    await dbConnect();
    try {                                     //always await while taking data from request.json
        const {username, email, password} = await request.json();
        const existingUserVerfiedByUsername = await User.findOne({
            username,
            isVerified: true   
        })
    } catch (error) {
        console.error('Error in signup route: ', error);
        return Response.json({
            success: false,
            message: 'Error in signup route'
        },
        {
            status: 500
        }
    )
    }
}