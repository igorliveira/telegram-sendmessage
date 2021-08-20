const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN_ENV;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

function sendMessage (chatID, Message) {
  bot.sendMessage(chatID, Message);
}

module.exports = sendMessage;

