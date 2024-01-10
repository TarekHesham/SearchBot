const convertLink = require("../../utils/convertLink");
const { perfix } = require("../../../config.json");
const { EmbedBuilder } = require("discord.js");
const isImage = require("../../utils/isImage");
const makeButtonsResults = require("../../utils/makeButtonsResults");

module.exports = async (client, msg) => {
  if (!msg.content.startsWith(perfix) || msg.author.bot) return;
  const msgContent = msg.content.replace(perfix, "").toLowerCase();
  if (msgContent.startsWith("search")) {
    const Embed = new EmbedBuilder()
      .setAuthor({
        name: "| Please enter [URL] or send img...",
        iconURL:
          "https://cdn.discordapp.com/attachments/734386208918208554/1189248301317500928/15-13-39-266_512.gif",
      })
      .setColor("#5fbbe8");
    const msgSearch = await msg.channel.send({ embeds: [Embed] });

    let repeat = false;

    do {
      const collectorFilter = (response) =>
        msg.author.id === response.author.id;
      const collect = await msg.channel.awaitMessages({
        filter: collectorFilter,
        fetchReply: true,
        max: 1,
        time: 30000
      });

      if (collect.size == 0) {
        Embed.setAuthor({
          name: "| Are you here !!",
          iconURL:
            "https://media.tenor.com/iu1ve231WM0AAAAj/timer-clock.gif",
        });
  
        msgSearch.edit({ embeds: [Embed] });
        return repeat = false;
      };

      const collectContent = collect.first().content,
        collectAttachments = collect.first().attachments;

      Embed.setAuthor({
        name: "| Searching...",
        iconURL:
          "https://cdn.discordapp.com/attachments/734386208918208554/1189248696047632504/ezgif.com-webp-to-gif-converter.gif",
      });

      msgSearch.edit({ embeds: [Embed] });

      let urls;
      if (collectContent && isImage(collectContent)) {
        urls = convertLink(collectContent);
        Embed.setImage(collectContent);
      } else if (collectAttachments.first() && isImage(collectAttachments.first().url)) {
        urls = convertLink(collectAttachments.first().url);
        Embed.setImage(collectAttachments.first().url);
      } else {
        Embed.setAuthor({
          name: "| Please enter available [URL] or send img!!",
          iconURL:
            "https://cdn.discordapp.com/attachments/734386208918208554/1189248935076823173/ezgif.com-webp-to-gif-converter_1.gif",
        });
        repeat = true;
        return msgSearch.edit({ embeds: [Embed] });
      };

      Embed.setAuthor({
        name: "| Results...",
        iconURL:
          "https://media.discordapp.net/attachments/734386208918208554/838892147381895228/search.gif",
      })
      setTimeout(
          () => msgSearch.edit({ embeds: [Embed], components: [makeButtonsResults(urls)] }),
          3000
      );
    } while (repeat);
  };
};
