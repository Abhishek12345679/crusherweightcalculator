import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("entryhistory.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS entryhistory (id INTEGER PRIMARY KEY NOT NULL, length REAL NOT NULL, breadth REAL NOT NULL, height REAL NOT NULL, cft REAL NOT NULL, weight REAL NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const createEntry = (length, breadth, height, cft, weight) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO entryhistory (length, breadth, height, cft, weight) VALUES(?, ?, ?, ?, ?);",
        [length, breadth, height, cft, weight],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const loadHistory = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM entryhistory",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
