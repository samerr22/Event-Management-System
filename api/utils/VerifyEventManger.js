export const verifyEventManger = (req, res, next) => {
    if (!req.user.isEventManger) {
        return res.status(403).json({ success: false, message: 'Access denied. Only Event Manager are allowed.' });
    }
    next();
};