const config = {
  TOKEN: {
    REFRESH_SECRET: process.env.REFRESH_SECRET,
    ACCESS_SECRET: process.env.ACCESS_SECRET,
  },
  TIME: {
    jwtExpiration: "60m", // 60 mins
    jwtRefreshExpiration: "30d", // 30 days
  },
};

module.exports = config;
