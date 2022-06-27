import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV;

const dev = {
    dbMongo: {
        connectionUrl: "mongodb+srv://Noith:QIlyDwLZFyH3sEcP@cluster0.ddb2b.mongodb.net/imperiodom?retryWrites=true&w=majority"
    }
}

const config = {
    dev
}

export default config[env];