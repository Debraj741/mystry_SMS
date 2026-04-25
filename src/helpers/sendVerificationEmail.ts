import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
) : Promise<ApiResponse>{
    try {
        await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Mystry_SMS || Verification Code',
      react: VerificationEmail({username,otp:verifyCode}),
    });

        return {success: true, message:"Verification Email Sended Successfully !!"}
    } catch (emailError) {
        console.error("Error Sending Verification Email !!", emailError)
        return {success: false, message:"Failed to Send Verification Email !!"}
    }
}