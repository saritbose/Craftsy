// Roles Based Access Middleware

const role = (...Roles) => {
  return (req, res, next) => {
    if (!req.user || !Roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ success: false, message: "Access Forbidden" });
    }
    next();
  };
};

export default role;
