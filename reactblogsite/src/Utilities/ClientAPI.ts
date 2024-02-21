import { serverAPI } from "../Components/Server/Utilities/ServerApi";
class ClientAPI {

    validateUserAndPassword = ( userName: string, password: string ) => {
        return serverAPI.userVerification( userName, password );
    }

    getPosts = () => {
        return serverAPI.getPosts();
    }
}

export const clientApi = new ClientAPI();