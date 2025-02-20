import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
// create the schema object of the user
const userSchema = new Schema(
    {
        firstName: { type: String, minLength: 3, maxLength: 20, required: true },
        lastName: { type: String, minLength: 3, maxLength: 20, required: true },
        email: {
            type: String,
            required: true,
            validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "not valid email"],
            unique: true,
        },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
        discriminatorKey: "type",
    }
);

userSchema.pre("save", async function () {
    if (this.isNew || this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});
userSchema.methods.toSimpleUser = function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
    };
};

const userModel = model("User", userSchema);

const simpleUserSchema = new Schema({
    paid: { type: "boolean", default: false },
    postalCode: { type: String},
    paymentMethod: { type: String },
});

const professionalSchema = new Schema({
    role: {
        type: String,
        enum: ["nutritionalist", "coach"],
        required: true,
    },
});
const adminSchema = new Schema({});

export const professionalModel = userModel.discriminator("Professional", professionalSchema, {
    discriminatorKey: "type",
});
export const simpleUserModel = userModel.discriminator("SimpleUser", simpleUserSchema, {
    discriminatorKey: "type",
});
export const adminModel = userModel.discriminator("Admin", adminSchema, {
    discriminatorKey: "type",
});
export default userModel;
