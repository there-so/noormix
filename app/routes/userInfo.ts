import { RequestHandler } from "express"
import { prisma } from "~/db.server"

export const userInfo: RequestHandler = async (req, res) => {
  const user = await prisma.users.findFirst()

  return res.send({ status: true, data: user })
}
