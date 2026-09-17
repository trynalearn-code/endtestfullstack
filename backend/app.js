import express from "express"
import router from "./routes/userRoute.js"
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(router)



app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})














