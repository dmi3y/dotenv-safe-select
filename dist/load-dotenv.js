const path = require("path");
const chalk = require("chalk");

module.exports = (envfile, example) => { 
  const pathToEnvFile = path.resolve("./", envfile);
  console.log(`Using ${chalk.red(pathToEnvFile)}.`);
  require("dotenv-safe").config({
    path: pathToEnvFile,
    example
  });
  return Promise.resolve();
}
