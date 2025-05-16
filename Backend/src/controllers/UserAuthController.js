import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// creating tokens using IDs and Roles

const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "7d",
  });
};

// User Logging In feature

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  // checking for user in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found." });
  }
  try {
    // verifying correct password
    const verify = await bcrypt.compare(password, user.password);
    if (!verify) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password." });
    }
    const token = createToken(user._id, user.role);
    return res.status(200).json({
      success: true,
      message: "User logged in.",
      token,
      role: user.role,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// User Registering feature

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // checking for user in the database
  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "User already registered." });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    await newUser.save(); // creating a new user model
    const token = createToken(newUser._id, newUser.role);
    return res.status(200).json({
      success: true,
      message: "User registered.",
      token,
      role: newUser.role,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
