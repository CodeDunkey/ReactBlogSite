import { serverAPI } from "../Components/Server/Utilities/ServerApi";
class ClientAPI {

    addUser = (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        return serverAPI.addUser(userName, password, email, firstName, lastName)
    }
    validateUserAndPassword = ( userName: string, password: string ) => {
        return serverAPI.userVerification( userName, password );
    }

    getPosts = () => {
        return serverAPI.getPosts();
    }
}

export const clientApi = new ClientAPI();