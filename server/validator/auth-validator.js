const { z } = require("zod");

const registrationSchema = z.object({
    username: z
        .string({ required_error: "username is required" })
        .trim()
        .min(3, { message: "min 3 words of name are required" })
        .max(255, { message: "max 255 characters are allowed" }),

    email: z
        .string({ required_error: "email address is required" })
        .email({ message: "invalid email address" })
        .trim()
        .min(3, { message: "min 3 words of email are required" })
        .max(255, { message: "email must less than 255 characters" }),

    phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "min 10 words of phone are required" })
        .max(20, { message: "phone muist be less tha 20 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .min(7, { message: "password is of min 7 characters" })
        .max(1024, { message: "must not greater than 1024 characters" }),
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "email address is required" })
        .email({ message: "invalid email address" })
        .trim()
        .min(3, { message: "min 3 words of email are required" })
        .max(255, { message: "email must less than 255 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .min(7, { message: "password is of min 7 characters" })
        .max(1024, { message: "must not greater than 1024 characters" }),
})

module.exports = { registrationSchema, loginSchema };
// module.exports = registrationSchema;