import { z } from "zod";

const loginSchema = z.object({
    email: z.string().max(127).email(),
    password: z.string().max(255)
})

export default loginSchema