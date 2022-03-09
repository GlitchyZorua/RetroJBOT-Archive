const superagent = require('superagent');
module.exports = {
    name: 'fortune',
    async execute() {
        const { body } = await superagent.get("http://www.yerkee.com/api/fortune/all");
        return ":fortune_cookie: " + body.fortune;
    }
}