let sessionLoggedIn = false;
let user = "Guest";
let hashedPw = "Guest"

export function setLoggedIn(username: string, hash: string) {
    sessionLoggedIn = true;
    user = username;
    hashedPw = hash;
    console.log(sessionLoggedIn, user, hashedPw);
}

export function logout() {
    sessionLoggedIn = false;
}

export function getLoggedIn(): boolean {
    console.log(sessionLoggedIn);
    return sessionLoggedIn;
}

export function getUsername(): string {
    return user;
}

export function getHash(): string {
    return hashedPw;
}
