const {
  EmbedBuilder,
  ApplicationCommandOptionType
} = require("discord.js");
const convertLink = require("../../utils/convertLink");
const isImage = require("../../utils/isImage");
const makeButtonsResults = require("../../utils/makeButtonsResults");

module.exports = {
  name: "search",
  description: "Search with link or upload image!",
  devOnly: false,
  testOnly: false,
  deleted: false,
  options: [
    {
      name: "image",
      description: "Upload the image you want to search for!",
      type: ApplicationCommandOptionType.Attachment,
      required: false,
    },
    {
      name: "link",
      description: "Type the image link...",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],
  callback: async (client, interaction) => {
    const Embed = new EmbedBuilder()
      .setAuthor({
        name: "| Please enter available [URL] or send img!!",
        iconURL:
          "https://cdn.discordapp.com/attachments/734386208918208554/1189248935076823173/ezgif.com-webp-to-gif-converter_1.gif",
      })
      .setColor("#5fbbe8");

    const URLImg =
      interaction.options.get("link")?.value ||
      interaction.options.get("image")?.attachment?.url;
    if (!URLImg || !isImage(URLImg)) return await interaction.reply({ embeds: [Embed], ephemeral: true });
    
    Embed.setAuthor({
      name: "| Image search results in search engines.",
      iconURL:
        "https://media.discordapp.net/attachments/734386208918208554/838892147381895228/search.gif",
    }).setImage(URLImg);

    const urls = convertLink(URLImg);
    const row = await makeButtonsResults(urls);

    await interaction.reply({ embeds: [Embed], components: [row], ephemeral: true });
  },
};
