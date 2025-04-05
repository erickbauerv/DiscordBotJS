// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// Buscando as informação de autenticação do Bot do arquivo .env
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID} = process.env

const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()


for(const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)

	if("data" in command && "execute" in command){
		client.commands.set(command.data.name, command)
	} else {
		console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausente`)
	}
}

console.log(client.commands)

// Create a new client instance


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);