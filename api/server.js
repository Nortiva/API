const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do dashboard
app.use(express.static(path.join(__dirname, "..")));

const file = "./data.json";

// Ler dados
app.get("/api/dashboard", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file));
    res.json(data);
});

// Atualizar dados
app.put("/api/dashboard", (req, res) => {
    fs.writeFileSync(file, JSON.stringify(req.body, null, 2));
    res.json({
        success: true,
        message: "Dados atualizados!"
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(3000, () => {
    console.log("🚀 API rodando em http://localhost:3000");
});
