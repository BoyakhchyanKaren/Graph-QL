const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const app = express();


const users = [
    {id:1, username:"Karen", age:21},    
];

const root = {
    getAllUsers: () => {
        return users;
    },
    getUser: ({id}) => {
        return users.find(el => +el.id === +id);
    },
    createUser: ({input}) => {
        const id = Date.now();
        const user = {
            id,
            ...input
        };
        users.push(user);
        return user;
    },
}

app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql:true,
    rootValue:root,
}));



app.listen(5000, () => {
    console.log(`Server is running on port: 5000`)
}); 