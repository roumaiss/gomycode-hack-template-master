import mongoose from "mongoose";
import logger from "./logger.js";

const dbConnection = mongoose
    .connect(process.env.MONGODB_URI, {
        auth: {
            username: process.env.MONGODB_USERNAME,
            password: process.env.MONGODB_PASSWORD,
        },
        dbName: process.env.MONGODB_DBNAME,
    })
    .then(() => {
        logger.info(`DB connected in ${process.env.MONGODB_DBNAME}`);
    })
    .catch((error) => {
        logger.error(error);
    });
export default dbConnection;
