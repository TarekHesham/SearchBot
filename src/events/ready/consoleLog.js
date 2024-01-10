module.exports = (client, ActivityType) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    activities: [{ name: "Watching", type: ActivityType.Custom, state:"You :D" }],
    status: "idle",
  });
};
