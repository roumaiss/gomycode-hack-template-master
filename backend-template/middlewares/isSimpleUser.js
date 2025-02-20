// isSimpleUser.js

export function isSimpleUser(req, res, next) {
    const userRole = req.user.type;
    console.log(userRole, req.user);
    // Check if the user role is 'SimpleUser'
    if (userRole === "SimpleUser") {
        return next(); // Allow the request to proceed
    }

    // If not a SimpleUser, return an error response
    return res.status(403).json({
        message: "Access denied. You must be a Simple User to perform this action.",
        status: "error",
    });
}
