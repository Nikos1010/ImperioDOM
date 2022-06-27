import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
import config from '../config.js';

const { connectionUrl } = config.dbMongo;

let _db;
export const mongoConnect = callback => {
    MongoClient.connect(connectionUrl)
        .then(client => {
            console.log('Connected with Mongo');
            _db = client.db();
            callback();
        })
        .catch(err => console.log(err));
}

export const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database Found';
}