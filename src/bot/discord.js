const {
Client,
GatewayIntentBits
}=require("discord.js");


const client = new Client({

intents:[

GatewayIntentBits.Guilds,

GatewayIntentBits.GuildMembers,

GatewayIntentBits.GuildMessages,

GatewayIntentBits.MessageContent

]

});



client.once(
"ready",
()=>{

console.log(
`🤖 Discord conectado como ${client.user.tag}`
);


});



client.login(
process.env.DISCORD_TOKEN
);



module.exports = client;