import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function setLoggedIn(username: string, hash: string) {
    cookies.set('sessionLoggedIn', true, { path: '/' });
    cookies.set('user', username, { path: '/' });
    cookies.set('hashedPw', hash, { path: '/' });
}

export function logout() {
    cookies.set('sessionLoggedIn', false, { path: '/' });
    cookies.set('user', 'Guest', { path: '/' });
    cookies.set('hashedPw', 'Guest', { path: '/' });
}

export function getLoggedIn(): boolean {
    console.log("Logged In: " + cookies.get('sessionLoggedIn'));
    return cookies.get('sessionLoggedIn');
}

export function getUsername(): string {
    return cookies.get('user');
}

export function getHash(): string {
    return cookies.get('hashedPw');
}
