const jwt = require("jsonwebtoken");
require("dotenv").config();

class authMiddleware {
    verifyToken(req, res, next) {
        const token = req.headers["authorization"];
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res
                        .status(403)
                        .json({ message: "Token is not valid", status: false });
                }
                req.user = user;
                next();
            });
        } else {
            return res
                .status(401)
                .json({ message: "Không có token", status: false });
        }
    }
    verifyTokenDatSan(req, res, next) {
        const token = req.headers["authorization"];
        if (token.split(' ')[1] !== "null") {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                req.user = user;
                next();
            });
        } else {
            next();
        }
    }
}

module.exports = new authMiddleware();
