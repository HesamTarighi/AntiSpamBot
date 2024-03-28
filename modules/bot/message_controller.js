const { getCoins } = require('../crypto')

function textMessage (ctx) {
    getCoins()
        .then(data => {
            try {
                const item = data.find(item => item.symbol.includes(ctx.message.text.toUpperCase()))

                ctx.reply(`
                Symbol: ${item.symbol}

Buy: ${item.buy}
Sell: ${item.sell}
                `)
            } catch (e) {
                ctx.reply('Not found!')
            }
        })
}

module.exports = { textMessage }
