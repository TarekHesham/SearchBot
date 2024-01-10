const { CLIENT_ID, BOT_TOKEN } = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");
const { REST, Routes } = require("discord.js");

module.exports = async (client) => {
  try {
    let commands = [];
    const localCommands = getLocalCommands();

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      if (localCommand.deleted) {
        console.log(
          `‼ Skipped registering command ${name} as it's set to delete.`
        );
        continue;
      }

      commands.push({
        name,
        description,
        options,
      });

      console.log(`✅ Registerd command ${name}`);
    }

    const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
