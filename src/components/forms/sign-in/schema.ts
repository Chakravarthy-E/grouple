import { z } from "zod"

export const SignInSchema = z.object({
    email: z.string().email("You must give a valid email address"),
    password: z
        .string()
        .min(8, { message: "Your password must be atleast 8 characters long" })
        .max(64, {
            message: "Your password can not be longer than 64 characters long",
        })
        .refine(
            (value) => /^[a-zA-Z0-9.-]/.test(value ?? ""),
            "password should contain only alphabets and numbers",
        ),
})
