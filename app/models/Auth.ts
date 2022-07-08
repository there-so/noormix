import { RequestHandler } from "express"
import jwt from "jwt-simple"

const Auth: RequestHandler = (req, res, next) => {
  // authorization
  const token = req.headers["authorization"]
  if (!token || !process.env.JWT_SECRET) {
    return res.json({
      status: false,
      statusCode: 100,
      message: "Not Authorized",
    })
  }

  const pureToken = token.replace("Bearer ", "")
  try {
    let tokenPayload = jwt.decode(pureToken, process.env.JWT_SECRET)
    if (tokenPayload.userId === 1) {
      // add user to req for routes
      req.user = {}
    }
  } catch (error) {
    return res.json({
      status: false,
      statusCode: 100,
      message: "Not Authorized",
    })
  }

  // req.user = {}
  next()
}

export default Auth
