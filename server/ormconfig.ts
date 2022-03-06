import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import {User} from "./src/entities/User";
dotenv.config();

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DATBASE || 'graph',
    entities: [User],
    logging: 'all',
    synchronize: true,
};
export default config;