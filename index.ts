import express, { Request, Response } from "express"
import Auth from "~/models/Auth"
import cors from "cors"

// Start of configurations -------------------------
const app = express()
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000

// End of configurations -------------------------

// Middleware
app.use(cors())

// Routes
app.get("/", (req: Request, res: Response) => {
  return res.send("NoorMix home")
})

// example Routes
import { helloWorld } from "~/routes/helloWorld"
app.get("/helloWorld", helloWorld)

app.get("/userInfo", Auth, helloWorld)

// Run app & create server
app.listen(port, () => {
  console.log(`✅ App started on this url: http://localhost:${port}`)
})
