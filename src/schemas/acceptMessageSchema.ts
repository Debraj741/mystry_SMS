import {z} from 'zod'

export const accceptMessageSchema = z.object({
    acceptMessage : z.boolean()
})