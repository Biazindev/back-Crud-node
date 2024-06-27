const authMiddleware = (req, res, next) => {
    const { username, password } = req.headers;

    if (username === 'admin' && password === 'admin') {
        next();
    } else {
        return res.status(401).json({ message: 'Acesso não autorizado.' });
    }
};

module.exports = authMiddleware;