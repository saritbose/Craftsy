import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Authorization Denied" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = token_decode.user;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
