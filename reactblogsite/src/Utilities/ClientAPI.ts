import { serverAPI } from "../Components/Server/Utilities/ServerApi";
class ClientAPI {

    validateUserAndPassword = ({ userName, password, setUserName, setIsUserValidated }: any) => { // skal types med username og password
        console.log("userName, password in client api", userName, password)
        let serverVeri = serverAPI.userVerification({ userName, password, setUserName, setIsUserValidated});
        console.log("serverVeri in client api", serverVeri)
    }
}

export const clientApi = new ClientAPI();