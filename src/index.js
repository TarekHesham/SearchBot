const { Client, GatewayIntentBits } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");

const { BOT_TOKEN } = require("../config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

eventHandler(client);

const getScreenShot = async (url) => {
  try {
    url = url.replace(/:/gi, "%253A").replace(/\//gi, "%252F");
    return await axios.get(
      `https://api.pikwy.com/?tkn=125&d=3000&u=${url}&fs=0&w=1280&h=720&s=100&z=100&f=jpg&rt=jweb`
    );
  } catch (error) {
    console.error(error);
  }
};

client.login(BOT_TOKEN);