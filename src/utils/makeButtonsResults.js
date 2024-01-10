const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
module.exports = (urls) => {
      const google = new ButtonBuilder()
        .setLabel("Google")
        .setURL(urls.google)
        .setEmoji("<:Google:1189665463106555944>")
        .setStyle(ButtonStyle.Link);
  
      const yandex = new ButtonBuilder()
        .setLabel("Yandex")
        .setURL(urls.yandex)
        .setEmoji("<:Yandex:1189665471960731698>")
        .setStyle(ButtonStyle.Link);
  
      const bing = new ButtonBuilder()
        .setLabel("Bing")
        .setURL(urls.bing)
        .setEmoji("<:Bing:1189665456253054996>")
        .setStyle(ButtonStyle.Link);
  
      const tineye = new ButtonBuilder()
        .setLabel("TinEye")
        .setURL(urls.tineye)
        .setEmoji("<:TinEye:1189665490377912350>")
        .setStyle(ButtonStyle.Link);
  
      const row = new ActionRowBuilder().addComponents(
        google,
        yandex,
        bing,
        tineye
      );

      return row;
}