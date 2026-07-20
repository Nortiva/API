const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const serverless = require("serverless-http"); // Importante para o Serverless

const app = express();

app.use(cors());
app.use(express.json());

// Caminho absoluto correto para o data.json funcionar na Netlify
const file = path.join(__dirname, "../../api/data.json");

// Rotas mantidas iguaizinhas às suas
app.get("/api/dashboard", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(file, "utf8"));
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao ler arquivo de dados" });
    }
});

app.put("/api/dashboard", (req, res) => {
    try {
        fs.writeFileSync(file, JSON.stringify(req.body, null, 2));
        res.json({
            success: true,
            message: "Dados atualizados!"
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao salvar dados" });
    }
});

// Em vez de usar app.listen(3000), exportamos para a Netlify controlar
module.exports.handler = serverless(app);
