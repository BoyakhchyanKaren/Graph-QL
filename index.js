import express from 'express';
import fetch from "node-fetch";
import graphql from "graphql";
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} = graphql;
import {graphqlHTTP} from "express-graphql";
const userData = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => res);


const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                return userData;
            }
        },
        getUserById: {
            type: new Object(userType),
            args: {id: {type: GraphQLInt}},
            async resolve(parent, args, context, info) {
                try {
                    const id = await args.id;
                    return await userData.find(el => +el.id === +id);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: userType,
            args: {
                name: {type: GraphQLString},
                username: {type: GraphQLString},
                email: {type: GraphQLString},
            },
            async resolve(parent, args) {
                try {
                    const data = {id: userData.length + 1, name: args.name, username: args.username, email: args.email};
                    await userData.push(data);
                    return data;
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
});


const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})

const app = express();
const port = 6969;

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen((port), () => {
    console.log(`Server is running on port : ${port}`);
});