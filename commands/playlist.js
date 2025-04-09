const { SlashCommandBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Playlist de estudos!"),

  async execute(interaction) {
    await interaction.reply("https://open.spotify.com/playlist/3OvAfXHqfvUZ3NJ9hhf9dg?si=7c7c427aa1424f76")
  }
}

