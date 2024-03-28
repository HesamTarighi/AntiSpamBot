const axios = require('axios')

function getCoins () {
    const url = 'https://api.kucoin.com/api/v1/market/allTickers'

    return axios.get(url).then(response => response.data.data.ticker)
}

module.exports = { getCoins }
