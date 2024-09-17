import { z } from "zod"

export const CreateGroupSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Group name must be atleast 3 characters long" }),
    category: z.string().min(3, { message: "You must select a category" }),
})
