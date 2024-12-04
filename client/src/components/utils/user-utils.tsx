import axios from "axios";
import {API_BASE_URL, hashLength} from "../constants/constants";

export const fetchUsers = async (): Promise<string[]> => {
    let userData: string[] | PromiseLike<string[]> = [];
    try {
        const response = await axios.get(API_BASE_URL + "/users");
        for (let x = 0; x < response.data.length; x++) {
            console.log(JSON.stringify(response.data[x]));
            userData[x] = JSON.stringify(response.data[x]);
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
    return userData;
};

export const checkUsernameExists = async (username: string) => {
    const userData: string[] = await fetchUsers();
    for (let i = 0; i < userData.length; i++) {
        console.log(userData[i]);
        if (userData[i].includes('"username":"' + username + '"')) {
            return true;
        }
    }
    return false;
}

export const getUserHash = async (username: string) => {
    const userData: string[] = await fetchUsers();
    for (let i = 0; i < userData.length; i++) {
        let index = userData[i].search('"username":"' + username + '"');
        if (index !== -1) {
            return userData[i].substring(index + 29 + username.length, index + 29 + username.length + hashLength);
        }
    }
    return "";
}
