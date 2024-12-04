import {genSaltSync, hashSync} from "bcrypt-ts";
import {hashLength, saltRounds} from "../constants/constants";

export function generateSaltedHash(password: string): string {
    const salt = genSaltSync(saltRounds);
    return hashSync(password, salt);
}

export function checkCorrectPassword(password: string, hash: string): boolean {
    if (typeof password !== "string" || typeof hash !== "string") {
        throw Error("Illegal arguments: " + typeof password + ", " + typeof hash);
    }

    if (hash.length !== hashLength) {
        return false;
    }

    return hashSync(password, hash.substring(0, hash.length - 31)) === hash;
}
