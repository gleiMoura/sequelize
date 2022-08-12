import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json);

app.listen(5000, () => {
    console.log("O servidor está rodando na porta 5000");
});