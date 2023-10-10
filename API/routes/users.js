import express from "express"
import { getUsers } from "..controller/user.js";

const.router = express.Router();

router.get("/", getUsers); //fazendo o get na raiz da rota "/", chamando a função get Users

export default router;