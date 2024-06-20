const adminMiddleware = async (req, res, next) => {
    try {

        const isAdminRole = req.user.isAdmin;
        if (!isAdminRole) {
            res.status(401).json({ message: "Access Denied user is not admin" });
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = adminMiddleware;