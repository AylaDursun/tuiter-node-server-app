import express from 'express'
import mongoose from "mongoose";
const CONNECTION_STRING = "mongodb+srv://AylaDursun:Dursun416@cluster0.hhqs7qt.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js"
const app = express()
app.use(cors())
app.use(express.json())
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);