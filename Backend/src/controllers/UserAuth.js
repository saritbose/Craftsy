import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_TOKEN);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ success: false, message: "User not found." });
  }
  try {
    const verify = bcrypt.compare(password, user.password);
    if (verify) {
      const token = createToken(user._id);
      return res.json({ success: true, message: "User logged in.", token });
    }
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong." });
  }
};

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ success: false, message: "User already registered." });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    await newUser.save();
    const token = createToken(newUser._id);
    return res.json({ success: true, message: "User registered.", token });
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong." });
  }
};
