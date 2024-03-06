const { findInstitutionInfo } = require("../data/institution");
const { findVolunteerInfo } = require("../data/volunteer");

async function loadUserInfo(decryptedToken) {
    let [username, role] = decryptedToken.split(":")
    let userInfo
    if (role === "volunteer") {
        userInfo = await findVolunteerInfo(username);
        if (userInfo) {
            userInfo[0]["role"] = "volunteer"
        }
    } else {
        userInfo = await findInstitutionInfo(username);
        if (userInfo) {
            userInfo[0]["role"] = "institution"
        }
    }
    return userInfo;
}

async function loadUserInfoByEncryptedToken(token)
{
    try {
        const response = await fetch("/api/user", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization": token
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return await response.json();
      } catch (error) {
        console.error('Failed to fetch data:', error);
        return []
      }
}

module.exports = { loadUserInfo, loadUserInfoByEncryptedToken };