export function checkPremium(req, res, next) {
    const user = req.user; 

    // Check if the user is premium (adjust the condition based on your schema)
    if (!user?.paid) {
        return res.status(403).json({ message: "Access denied. Premium membership required." });
    }

    next();
}