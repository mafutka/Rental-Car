import { FormFields } from "@/types/types";
import Joi from "joi";

export const formSchema = Joi.object<FormFields>({
    name: Joi.string().min(2).required().messages({
        "string.empty": "Name is required",
        "string.min": "Name should be at least 2 characters",
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be valid",
    }),
    date: Joi.string().required().messages({
        "string.empty": "Please select a date",
    }),
    comment: Joi.string().max(500).allow("").messages({
        "string.max": "Comment should be not more than 500 symbols",
    }),
});