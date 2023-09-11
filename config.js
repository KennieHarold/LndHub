require("dotenv").config();

let config = {
  enableUpdateDescribeGraph: false,
  postRateLimit: 100,
  rateLimit: 200,
  forwardReserveFee: 0.01,
  intraHubFee: 0.003,
  redis: {
    port: 12914,
    host: "127.0.0.1",
    family: 4,
    password: process.env.REDIS_PASSWORD,
    db: 0,
  },
  lnd: {
    url: process.env.LND_RPC_URL,
    password: process.env.LND_RPC_PASSWORD,
  },
};

module.exports = config;
