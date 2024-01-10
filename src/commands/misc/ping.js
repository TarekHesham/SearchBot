const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Poing!",
  devOnly: true,
  testOnly: false,
  deleted: false,
  options: [],
  callback: async (client, interaction) => {
    const Embed = new EmbedBuilder()
      .setTitle("🏓 | Poing!!")
      .setThumbnail("https://i.pinimg.com/originals/45/17/de/4517de6e2831dbe40f36c81c00599123.gif")
      .setColor("#5fbbe8");

    await interaction.reply({ embeds: [Embed], ephemeral: true });
  },
};
