const bcrypt = require ('bcrypt');
const saltRounds = 10;

export function generateSaltedHash(password: string ) {
    bcrypt.genSalt(saltRounds, function(err: any, salt: string) {
        bcrypt.hash(password, salt, function(err: any, hash: string) {
            return hash;
        });
    });
}

export function checkCorrectPassword(password:string, hash: string) {
    bcrypt.compare(password, hash, function(err: any, result: boolean) {
        return result;
    });
}
