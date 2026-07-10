require("dotenv").config();


const app = require("./app");

require("./bot/discord");


const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{

    console.log(
        `🚀 Nortiva API online na porta ${PORT}`
    );

});