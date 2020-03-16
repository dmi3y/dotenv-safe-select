const cliSelect = require("cli-select");
const chalk = require("chalk");
const glob = require("glob");

const envfiles = glob.sync(".env!(.example)");

const options = {
  values: envfiles,
  valueRenderer: (value, selected) => {
    if (selected) {
      return chalk.green.underline(value);
    }
    return value;
  }
};

module.exports = cliSelect(options);
