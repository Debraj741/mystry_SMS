import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3,"Username must be atleast 3 charecters !!")
    .max(6,"Username must be atmost 6 charecters !!")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special charecters !!")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.email({error:"Invalid Email Address !!"}),
    password : z.string().min(6,{error:"Password must be atleast 6 charecter !!"})
})