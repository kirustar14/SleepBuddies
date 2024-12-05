import { API_BASE_URL } from "../constants/constants";

type Log = {
    date: Date;
    hours: number;
}

export const addHours = async (log: Log): Promise<Log> => {
    const response = await fetch(API_BASE_URL + "/sleepLogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
    });

    if (!response.ok){
        throw new Error("Failed to add hours");
    }

    return response.json();
};

export const fetchHours = async (): Promise<Log[]> => {
    const response = await fetch(API_BASE_URL + "/sleepLogs");

    if (!response.ok){
        throw new Error("Failed to fetch");
    }

    const logList = response.json().then((jsonResponse) => {
        console.log("data in fetchHours", jsonResponse);
        return jsonResponse.data;
    });

    console.log("response in fetchHours", logList);

    return logList;
}

export const updateHours = async (log: Log): Promise<Log> => {
    if (!log.date) {
        throw new Error("no date given");
    }

    const response = await fetch(API_BASE_URL + `/sleepLogs/${log.date}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
    });

    if (!response.ok) {
        throw new Error("Failed to update hours");
    }

    return response.json();
};