const TelegramBot = require('node-telegram-bot-api');

console.log("hi");

// replace the value below with the Telegram token you receive from @BotFather
const token = '7667426915:AAEJWq_1j7mrktxzR4Qg5V6zgKBv-xL1thU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const message = "this your message: \"Hello\"."

  const chatId = msg.chat.id;

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, message);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

console.log("by");
