import db from '../_database/db';

export async function get(req, res, next) {
  const distances =  db.getDistanceRecords();
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(distances));
}

export async function post(req, res, next) {
  const { address0, address1, distance } = req.body;
  const success =  db.putDistanceRecord({ address0, address1, distance });

  if (success) {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({}));
  }
  next();
}
