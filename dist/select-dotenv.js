const inquirer = require('inquirer');

const selectDotenv = (envfiles) => {
  const options = {
    type: 'list',
    name: 'envfile',
    message: 'Select envfile.',
    choices: envfiles,
  };
  return inquirer.prompt(options);
}

module.exports = selectDotenv
