import Database from 'better-sqlite3';

const db = new Database('db/database.sqlite');

export default class Db {
  static putDistanceRecord({ address0, address1, distance }) {
    const stm = db.prepare("INSERT INTO distances (address0, address1, distance) \
                                   VALUES (@address0, @address1, @distance)");
    try {
      const r = stm.run({ address0, address1, distance });
      return r.changes > 0;
    } catch (err) {
      console.log("Couldn't persist object");
    }
    return false;
  };

  static getDistanceRecords() {
    try {
      return db.prepare("SELECT id, address0, address1, distance FROM distances").all();
    } catch (err) {
      console.log("Couldn't retrieve data from 'distances' table.");
    }
    return [];
  };
}
