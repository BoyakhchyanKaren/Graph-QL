import 'reflect-metadata';
import dotenv from 'dotenv';
import {createConnection} from 'typeorm';
import config from "../ormconfig";
import {getApplication} from './app';
dotenv.config();
const PORT = process.env.PORT || '4564';

export type Server = {
    (port:string):Promise<void>,
};

const server:Server = async (port:string):Promise<void> => {

    try {
        await createConnection(config);
        const app = getApplication();
        app.listen((port), () => {
           console.log(`Server is running on port: ${port}`);
        });
    } catch (e) {
        console.log("Error: Database connection failed!", e);
    }

};

server(PORT).catch((e) => console.log(e));
