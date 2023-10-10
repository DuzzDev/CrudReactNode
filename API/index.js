import express from "express"
import cors from "cors"

const app = express();

app.use(express.json()); //habilitando o modo json
app.use(cors());   //habilitando o cors para evitar conflitos rodando localmente

app.listen(8800); //Direcionando o app para a porta 8800
