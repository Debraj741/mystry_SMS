import {z} from 'zod'

export const messageSchema = z.object({
    content : z
    .string()
    .min(10,{error:"Content must be at least 10 charecters !!"})
    .max(300,{error:"Content must be atmost 300 charecters !!"})
})