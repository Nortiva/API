const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const serverless = require("serverless-http");

const app = express();

app.use(cors());
app.use(express.json());

// Caminho para o arquivo de dados na Netlify
const file = path.join(__dirname, "../../api/data.json");

// Ler dados
app.get("/api/dashboard", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(file, "utf8"));
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: "Erro ao ler banco de dados" });
    }
});

// Atualizar dados
app.put("/api/dashboard", (req, res) => {
    try {
        fs.writeFileSync(file, JSON.stringify(req.body, null, 2));
        res.json({ success: true, message: "Dados atualizados!" });
    } catch (e) {
        res.status(500).json({ error: "Erro ao salvar dados" });
    }
});

// Removemos o app.get("/") e o app.listen, pois a Netlify cuida disso de forma estática
module.exports.handler = serverless(app);
