import { z } from "zod";

export const zodSchema = z.object({
    name: z.string().nonempty("Name is a required field").min(1),
    email: z.string().nonempty("Email is a required field").email("Must be a valid email"),
    password: z
        .string()
        .nonempty("Password is a required field")
        .regex(/(?=.*?[A-Z])/, "Uppercase letter")
        .regex(/(?=.*?[a-z])/, "Lowercase letter")
        .regex(/(?=.*?[0-9])/, "Number")
        .regex(/(?=.*?[!@#$%^&*])/, "Special character (e.g. !?<>@#$%)")
        .min(8, "> 7 characters")
})

export const zodSignIn = z.object({
    email: z.string().nonempty("Email is a required field").email("Must be a valid email"),
    password: z
        .string()
        .nonempty("Password is a required field")
})

export const zodCode = z.object({
    number1: z.string().nonempty("code is riquired").max(1),
    number2: z.string().nonempty("code is riquired").max(1),
    number3: z.string().nonempty("code is riquired").max(1),
    number4: z.string().nonempty("code is riquired").max(1),
})

