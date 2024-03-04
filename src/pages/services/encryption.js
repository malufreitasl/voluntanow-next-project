const salt = 'f844b09ff50c'

function encryptToken(decryptedStr) {
    let encryptedToken = btoa(decryptedStr);
    return encryptedToken;
}

function decryptToken(token) {
    let decryptedToken = atob(token);
    return decryptedToken;
}

module.exports = { encryptToken, decryptToken };
