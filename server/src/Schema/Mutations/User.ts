import {UserType} from "../TypeDefinitions/UserType";
import {GraphQLInt, GraphQLString} from "graphql";
import {getRepository} from "typeorm";
import {User} from "../../entities/User";
import {userType} from "../TypeDefinitions/UserType";


export const CREATE_USER = {
    type: UserType,
    args: {
        user_name: {type: GraphQLString},
        user_email: {type: GraphQLString},
        password: {type: GraphQLString},
        phone_number: {type: GraphQLInt},
    },
    async resolve(parent: any, args: any) {
        try {
            const {user_name, user_email, password, phone_number} = args;
            console.log(args);
            const userDetails: userType = {
                user_name,
                user_email,
                password,
                phone_number
            };
            console.log(userDetails);
            const newUser = await getRepository(User).create(userDetails);
            return await getRepository(User).save(newUser);
        } catch (e) {
            console.log(e);
        }
    }
};


export const UPDATE_USER = {

    type: UserType,
    args : {
        id: {type: GraphQLInt},
        user_name: {type: GraphQLString},
        user_email: {type: GraphQLString},
        password: {type: GraphQLString},
        phone_number: {type: GraphQLInt},
    },

    async resolve(parent:any, args:any) {
        try{
            const {user_name, user_email, password, phone_number, id} = args;
            const userDetails: userType = {
                user_name,
                user_email,
                password,
                phone_number
            };
            const user = await getRepository(User).findOne(id);

            if(user) {
                await getRepository(User).merge(user, userDetails);
                return getRepository(User).save(user);
            }else{
                return ("User not found");
            }
        }catch (e){
            console.log(e);
        }
    }

}


export const DELETE_USER = {

    type: UserType,
    args: {id: {type:GraphQLInt}},
    async resolve (parent:any, args:any) {
        const {id} = args;
        const user = await getRepository(User).findOne(id);
        if(user) {
            return getRepository(User).delete({id:id});
        }else{
            return "User not found";
        }
    }

}