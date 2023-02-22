import mongoose from 'mongoose';
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'MongooseCheckpointDB';      // REPLACE WITH YOUR DB NAME
class Database {
    
    constructor() {
        this._connect()
    }
    _connect() {
        
        mongoose.set("strictQuery", false);
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }
}
export default  Database