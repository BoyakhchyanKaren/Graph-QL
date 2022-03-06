import express, {Express, Response, Request} from "express";
import cors from "cors";
import {graphqlHTTP} from "express-graphql";
import {schema} from "./Schema";

export const getApplication = ():Express => {
    const app = express()
        .use(express.json())
        .use(cors())
        .get("/", (req:Request, res:Response) => {
            res.send("<h1>Hello GraphQL</h1>")
        })
        .use("/graphql", graphqlHTTP({
            schema,
            graphiql:true,
        }))
    return app;
}




