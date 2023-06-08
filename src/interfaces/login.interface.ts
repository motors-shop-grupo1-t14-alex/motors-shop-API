import { z } from "zod";
import loginSchema from "../schemas/login.schema";

type iLoginRequest = z.infer<typeof loginSchema>

export default iLoginRequest