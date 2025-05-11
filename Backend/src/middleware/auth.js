import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.json({ success: false, message: "Authorization Denied" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = { _id: token_decode.id };
    console.log("User ID:", req.user._id);

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
