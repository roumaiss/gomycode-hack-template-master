import userModel, { simpleUserModel } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

export async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) throw new Error(`User ${email} not found`);
        if (!(await bcrypt.compare(password, user.password)))
            throw new Error("invalid credentials");
        // generate token for login
        // npx auth secret to generate token secret
        const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET, {
            expiresIn: 3600 * 24,
        });
        res.json({ user: user.toSimpleUser(), token: token });
    } catch (e) {
        logger.error(e);
        res.status(400).json({ error: e.message });
    }
}

export async function registerUser(req, res) {
    try {
        const { email, password, firstName, lastName, role } = req.body;
        const user = await simpleUserModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });

        const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET, {
            expiresIn: 3600 * 24,
        });
        res.json({ user: user.toSimpleUser(), token: token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

export function checkUser(req, res) {
    res.json({ data: req.user.toSimpleUser() });
}
