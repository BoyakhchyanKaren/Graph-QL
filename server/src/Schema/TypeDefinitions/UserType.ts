import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID} from "graphql";
export type userType = {
    user_name:string,
    user_email:string,
    password:string,
    phone_number:number
}


export const UserType  = new GraphQLObjectType({
    name:"User",
    fields: () => ({
        id: {type: GraphQLID},
        user_name: {type: GraphQLString},
        user_email: {type: GraphQLString},
        password: {type: GraphQLString},
        phone_number: {type: GraphQLInt},
    }),
});

export const SingleUserType = new GraphQLObjectType({
    name:"SingleUser",
    fields: () => ({
        id: {type: GraphQLID},
        user_name: {type: GraphQLString},
        user_email: {type: GraphQLString},
        password: {type: GraphQLString},
        phone_number: {type: GraphQLInt},
    }),
});