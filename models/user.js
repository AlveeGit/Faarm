import { Schema, model, models} from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"]
    },
    fullName: {
        type: String,
        required: [true, "Fullname is required"],
        minLength: [3, "Fullname must be at least 3 characters"],
        maxlength: [30, "Fullname must be at most 30 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    }
})

const User = models.User || model("User", UserSchema)
export default User