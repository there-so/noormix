import { RequestHandler } from "express"

export const helloWorld: RequestHandler = (req, res) => {
  return res.send({ status: true, data: "Hello World!" })
}
