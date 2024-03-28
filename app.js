require('dotenv').config()
const { message } = require('telegraf/filters')
const { bot } = require('./configs/bot.config')
const { startCommand, helpCommand } = require('./modules/bot/command_controller')
const { textMessage } = require('./modules/bot/message_controller')

// command controller
bot.command('start', startCommand)
bot.command('help', helpCommand)
// messgae controller
bot.on(message('text'), textMessage)
bot.launch()
