import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.info('Aplicação rodando em https://localhost:3000')
})
