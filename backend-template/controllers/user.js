import userModel, { adminModel, professionalModel, simpleUserModel } from "../models/user.js";

export async function getUsers(req, res) {
    try {
        const users = await userModel.find();
        res.json({ data: users, status: "success" });
    } catch (e) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

export async function getUserById(req, res) {
    const { id: _id } = req.params;
    try {
        const user = await userModel.findById(_id);
        if (!user) throw new Error("User not found");

        res.json({ data: user, status: "success" });
    } catch (error) {
        res.json({ message: error.message, status: "error" });
    }
}
export async function addUser(req, res) {
    const { type, ...user } = req.body;
    try {
        let newUser;
        switch (type) {
            case "Professional":
                newUser = await professionalModel.create(user);
                break;
            case "SimpleUser":
                newUser = await simpleUserModel.create(user);
                break;
            case "Admin":
                newUser = await adminModel.create(user);
                break;
            default:
                throw new Error("Invalid media type ");
        }
        await newUser.save();
        res.json({ data: newUser, status: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

export async function updateUser(req, res) {
    const { id: _id } = req.params;
    const updateData = req.body;
    try {
        const user = await userModel.findById(_id);
        if (!user) throw new Error("user not found");

        Object.keys(updateData).forEach((key) => {
            user[key] = updateData[key];
        });

        await user.save();
        res.json({ data: updatedUser, status: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

export async function deleteUser(req, res) {
    const { id: _id } = req.params; // Get user ID from request body

    try {
        const deletedUser = await userModel.findByIdAndDelete(_id); // ✅ Delete directly

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found", status: "error" });
        }

        res.json({ data: deletedUser, status: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}
