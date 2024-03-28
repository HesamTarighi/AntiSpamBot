function startCommand (ctx) {
    ctx.reply('Hello, To see the currency prices, please send the name of the currency to the bot.')
}

function helpCommand (ctx) {
    ctx.reply(
    'To see the currency prices, please send the name of the currency to the bot. \n For example: BTC-USD'
    )
}

module.exports = { startCommand, helpCommand }
