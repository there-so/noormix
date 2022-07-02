import express, { Request, Response } from "express"
import type { RequestHandler } from "express"

const app = express()
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000

const handler: RequestHandler = (req, res) => {
  return res.send({ ss: "Hello World!" })
}
app.get("/", handler)

app.get("/g", (req: Request, res: Response) => {
  return res.send({ ss: "Hello World!" })
})

// app.get<
//   {},
//   { data: Dog[]; message: string },
//   {},
//   {
//     page: number
//     limit: number
//     breed: "labrador" | "german shepherd" | "golden retriever"
//   }
// >("/api/v1/dogs", (req, res) => {
//   // your implementation
//   req.
// })

app.listen(port, () => {
  console.log(`✅ App started on this url: http://localhost:${port}`)
})
