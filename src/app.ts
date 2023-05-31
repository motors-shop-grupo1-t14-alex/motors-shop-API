import "express-async-errors"
import express, { Application } from "express"
import { handleErros } from "./erros"
import cors from "cors"

const app: Application = express()
app.use(cors())
app.use(express.json())

//rotas

app.use(handleErros)

export default app