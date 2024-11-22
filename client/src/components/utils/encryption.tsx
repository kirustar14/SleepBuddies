const bcrypt = require ('bcrypt');
const saltRounds = 10;

export function generateSaltedHash(password: string) : string {
    let saltedHash : string = '';
    bcrypt
        .hash(password, saltRounds)
        .then((hash: string) => {
            console.log(`Hash: ${hash}`);
            saltedHash = hash;
        })
        .catch((err: { message: any; }) => console.error(err.message));
    return saltedHash;
}

export function checkCorrectPassword(password:string, hash: string) {
    bcrypt.compare(password, hash, function(err: any, result: boolean) {
        return result;
    });
}
