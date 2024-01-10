const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "avatar",
  description:
    "See a user's avatar. Leave the user argument empty to see your own!",
  devOnly: false,
  testOnly: false,
  deleted: false,
  options: [
    {
      name: "user",
      description: "The user who's avatar you want to see!",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],
  callback: async (client, interaction) => {
    const userMention = interaction.options.get("user")?.member || interaction.member;

    const Embed = new EmbedBuilder()
      .setColor("#5fbbe8")
      .setAuthor({
        name: userMention.user.username,
        iconURL: userMention.displayAvatarURL({ size: 1024, dynamic: true }),
      })
      .setImage(userMention.displayAvatarURL({ size: 1024, dynamic: true }))
      .setTitle("Avatar Link")
      .setURL(userMention.displayAvatarURL({ size: 1024, dynamic: true }))
      .setFooter({
        text: `Requested by ${interaction.member.user.globalName}`,
        iconURL: interaction.member.displayAvatarURL({ size: 1024, dynamic: true }),
      });

    await interaction.reply({ embeds: [Embed] });
  },
};
