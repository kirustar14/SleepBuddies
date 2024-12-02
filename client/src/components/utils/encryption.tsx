import { genSaltSync, hashSync} from "bcrypt-ts";
const saltRounds = 10;

export function generateSaltedHash(password: string): string {
    const salt = genSaltSync(saltRounds);
    return hashSync(password, salt);
}

export function checkCorrectPassword(password: string, hash: string) {
    if (hash.length !== 60){
        return false;
    }

    return hashSync(password, hash.substring(0, hash.length - 31)) === hash;
}
