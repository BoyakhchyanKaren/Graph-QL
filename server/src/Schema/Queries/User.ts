import {SingleUserType, UserType} from "../TypeDefinitions/UserType";
import { GraphQLInt, GraphQLList } from "graphql";
import {getRepository} from "typeorm";
import {User} from "../../entities/User";


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        try {
             return await getRepository(User).find();
        } catch (e) {
            console.log(e);
        }
    }
};

export const GET_USER = {
    type: SingleUserType,
    args: {id: {type:GraphQLInt}},
    async resolve (parent:any, args:any) {
        const {id} = args;
        try {
            return await getRepository(User).findOne(id);
        } catch (e) {
            console.log(e);
        }
    }
};