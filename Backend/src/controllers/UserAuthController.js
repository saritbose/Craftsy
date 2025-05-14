import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "7d",
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ success: false, message: "All fields are required." });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ success: false, message: "User not found." });
  }
  try {
    const verify = await bcrypt.compare(password, user.password);
    if (!verify) {
      return res.json({ success: false, message: "Invalid password." });
    }

    const token = createToken(user._id, user.role);
    console.log("Successfully logged in.");

    return res.json({
      success: true,
      message: "User logged in.",
      token,
      role: user.role,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
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
    const token = createToken(newUser._id, newUser.role);
    return res.json({
      success: true,
      message: "User registered.",
      token,
      role: newUser.role,
    });
  } catch (error) {
    return res.json({ success: false, message: "Registered Failed" });
  }
};
