export function isUserLoggedIn() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("token") !== null;
    }
    return false; 
}

export function removeToken() {
    localStorage.removeItem("token");
}