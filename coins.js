const { RosaCoins } = require('./structurs/RosaCoins')
client = new RosaCoins(),
client.login(process.ENV.token)
