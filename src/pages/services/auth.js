const { findUserInfo } = require("../data/auth");
const { encryptToken } = require("./encryption");

async function login(username, password) {
    const accountInfo = await findUserInfo(username, password);

    return accountInfo;
}

async function generateToken(accountInfo) {
    const token = encryptToken(accountInfo.username + ":" + accountInfo.role);
    console.log(accountInfo.username)
    console.log(token)
    return token;
}

module.exports = { generateToken, login };