import axios from "axios";
import {API_BASE_URL} from "../constants/constants";

export const fetchUsers = async(): Promise<string[]> => {
    let userData: string[] = [];
    try {
        const response = await axios.get(API_BASE_URL + "/users");
        for (let str in response.data) {
            userData.push(JSON.stringify(str));
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
    return userData;
};

export const checkUsernameExists = async (username: string) => {
    let userData: string[] = await fetchUsers();

    for (let str in userData) {
        if (str.search('"username":"' + username + '"') !== -1) {
            return true;
        }
    }
    return false;
}
