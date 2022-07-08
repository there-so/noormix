import express, { Request, Response } from "express"
import type { RequestHandler } from "express"
import { helloWorld } from "~/routes/helloWorld"

// Start of configurations -------------------------
const app = express()
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000

// End of configurations -------------------------

// Middleware
app.use((req, res, next) => {
  //auth
  req.user = {}
  next()
})

// Routes
app.get("/", (req: Request, res: Response) => {
  return res.send("NoorMix home")
})

app.get("/helloWorld", helloWorld)

// Run app & create server
app.listen(port, () => {
  console.log(`✅ App started on this url: http://localhost:${port}`)
})
