import jwt from "jsonwebtoken";

const protected_routes = (req, res, next) => {
  try {
    let token = req.cookies.authtoken;

    let verfiy_token = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verfiy_token);
    if (!verfiy_token) {
      return res.json("user not found");
    }
    next();
  } catch (error) {
    res.send(error);
  }
};

export default protected_routes;
