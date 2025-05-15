import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(403)
      .json({ success: false, message: "Authorization Denied" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = { _id: token_decode.id, role: token_decode.role };

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default authUser;
