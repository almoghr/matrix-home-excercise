// libraries
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_LIFE_IN_MS } = require("../constants/consts.js");

const verifyUser = async (req, res, next) => {
  try {
    if (req.cookies.token) {
      const decoded = jwt.verify(req.cookies.token, "cookieSecret");
      if (Date.now() - new Date(decoded.created) < ACCESS_TOKEN_LIFE_IN_MS) {
        req.user = decoded;
        next();
      } else {
        res.clearCookie(req.cookies.token);
        throw new Error("Token lifetime is dead");
      }
    } else {
      throw new Error("Invalid token");
    }
  } catch (e) {
    // for debugging purposes
    console.error(e.message);
    // the message to be returned to the client
    return res.status(401).json({ message: "You are not authorized" }).end();
  }
};

module.exports = {verifyUser}