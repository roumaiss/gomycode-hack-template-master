export const isAdmin = (req, res, next) => {
    if (req.user.type === "Admin") {
        return next(); // Allow access to the next middleware or route handler
    }
    // If not an admin, return a forbidden error
    return res.status(403).json({ message: "Forbidden: You do not have admin access" });
};
