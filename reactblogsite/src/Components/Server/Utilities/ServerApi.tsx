import { useState } from "react"
import { User } from "../../../Types/Types"
import { Users } from "../Database/Users"



class ServerAPI {
    
    userVerification = ({ userName, password, setUserName, setIsUserValidated }: any) => {
        console.log('username and password on server', userName, password);
        // const [userVerified, setUserVerified] = useState<boolean>(false)
        const verificationOfUser = Users.find((user) => user.userName === userName);
        const verificationOfPassword = Users.find((user)=> user.password === password);
        console.log('verificationOfUser', verificationOfUser);

        // klovn. det skal være .find !!!!
        const mapUsers = Users.map((user)=>{
            if(verificationOfUser?.userName === user.userName && verificationOfPassword?.password === user.password){
                // setUserVerified(true)
                setUserName(userName)
                setIsUserValidated(true)
                // console.log('you are logged in');
            }
        })
        // console.log(' :', userVerified);
        return {
            
            
        }
    }
}

export const serverAPI = new ServerAPI(); 