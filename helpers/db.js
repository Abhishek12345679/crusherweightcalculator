import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("history.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, length REAL NOT NULL, breadth REAL NOT NULL, height REAL NOT NULL, cft REAL NOT NULL, weight REAL NOT NULL);",
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

export const createEntry = (name, length, breadth, height, cft, weight) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO history (name, length, breadth, height, cft, weight) VALUES(?, ?, ?, ?, ?, ?);",
        [name, length, breadth, height, cft, weight],
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
