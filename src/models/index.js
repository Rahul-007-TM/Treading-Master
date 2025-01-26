import mongoose, { Schema } from "mongoose"

const LeadFormSchema = new Schema(
    {
        fullname: String,
        mobile: String,
        email: String,
        state: String
    },
    {
        timestamps: true
    }
)

const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadFormSchema);

export default Lead;