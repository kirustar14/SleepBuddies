import sqlite3 from "sqlite3";
import { open } from "sqlite";

const initDB = async () => {
    // Open the database connection
    const db = await open({
        filename: "database.sqlite",
        driver: sqlite3.Database,
    });
    // Create a "budget" table if it doesn't exist
    // TODO change to actual format
    await db.exec(`
        CREATE TABLE IF NOT EXISTS expenses (        
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            encryptedPw TEXT NOT NULL
        );
    `);

    // Create the "journal" table for mood entries
    await db.exec(`
        CREATE TABLE IF NOT EXISTS journal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mood TEXT NOT NULL,
            entry TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    
    return db;
};

export default initDB;
