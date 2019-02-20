// PLEASE DON'T change function name
module.exports = function makeExchange(money) {
  if (money > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}

  let exchange = {}

  const mapCoinToLetter = {50: 'H', 25: 'Q', 10: 'D', 5: 'N', 1: 'P'}
  const coins = Object.keys(mapCoinToLetter).reverse()

  while (money > 0) {
    const coin = coins.shift()
    let counter = 0
    while (money-coin > -1) {
      money -= coin
      counter++
    }
    if (counter) {
      exchange[mapCoinToLetter[coin]] = counter
    }
  }

  return exchange
}
