module.exports = {
  development: {
    storage: "development/testing_storage.db",
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
  },
  test: {
    // TODO: add test config
  },
  production: {
    // TODO: add production config
  },
};
