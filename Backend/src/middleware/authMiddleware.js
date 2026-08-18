import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.authtoken;

    if (!token) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY
    );
    console.log(decoded)
    req.user = decoded;
        
    next(); 

  } catch (error) {
    console.log(error)
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware