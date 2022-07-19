import "dotenv/config"
import express, { Request, Response } from "express"
import Auth from "~/models/Auth"
import cors from "cors"
import fileUpload from "express-fileupload"

// Start of configurations -------------------------
const app = express()
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000

// End of configurations -------------------------

// Middleware
// --- handling post request and multipart
// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// --- Allow all cors
app.use(cors())

// --- File upload
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }),
)

// Routes
app.get("/", (req: Request, res: Response) => {
  return res.send("NoorMix home")
})

// example Routes
import { helloWorld } from "~/routes/helloWorld"
app.get("/helloWorld", helloWorld)

// Authenticated route
import { userInfo } from "~/routes/userInfo"
app.get("/userInfoWithAuth", Auth, userInfo)
app.get("/userInfo", userInfo)

// Run app & create server
app.listen(port, () => {
  console.log(`✅ App started on this url: http://localhost:${port}`)
})
