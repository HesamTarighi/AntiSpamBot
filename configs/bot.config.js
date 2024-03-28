const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

function initProcessBot () {
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

module.exports = {
    bot
}
