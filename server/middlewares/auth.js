import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.headers; //token is in req headers

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecoded.id) {

         if (!req.body) {
           req.body = {};
         }

      req.body.userId = tokenDecoded.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next();
  } catch (error) {
    console.log("Error in Auth Middleware" + error.message);
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
