const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Nenhuma linguagem selecionada")
      .addOptions(
        {
          label: "JavaScript",
          description: "Veja a documentação de Javascript",
          value: "javascript"
        },
        {
          label: "Python",
          description: "Veja a documentação de Python",
          value: "python"
        },
        {
          label: "C#",
          description: "Veja a documentação de C#",
          value: "csharp"
        },
        {
          label: "discord.js",
          description: "Veja a documentação de discord.js",
          value: "discordjs"
        },
      )
  )

module.exports = {
  data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acesse a documentação de tecnologias"),

  async execute(interaction) {
    await interaction.reply({content: "Selecione uma das tecnologias abaixo:", components: [row]})
  }
}
