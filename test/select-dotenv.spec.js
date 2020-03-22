const assert = require('assert');
const selectdotenv = require('../dist/select-dotenv')
const bddStdin = require('bdd-stdin');

describe('select dotenv', () => {
    it('can select first dotenv file', () => {
        bddStdin('\n');
        return selectdotenv(['hello', 'me']).then((selected) => {
            assert.equal(selected.envfile, 'hello')
        })
    });
    it('can select second dotenv file', () => {
        bddStdin(bddStdin.keys.down, '\n');
        return selectdotenv(['hello', 'me']).then((selected) => {
            assert.equal(selected.envfile, 'me')
        })
    });
});
