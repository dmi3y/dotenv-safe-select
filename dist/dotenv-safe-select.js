const path = require("path");
const chalk = require("chalk");
const selectDotenv = require("./select-dotenv");

module.exports = selectDotenv.then(({ value: envFile }) => {
  const pathToEnvFile = path.resolve("./", envFile);
  console.log(`Using ${chalk.red(pathToEnvFile)}.`);
  require("dotenv-safe").config({
    path: pathToEnvFile
  });
});
