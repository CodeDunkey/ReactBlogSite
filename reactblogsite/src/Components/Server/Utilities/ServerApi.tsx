import { useState } from "react"
import { User } from "../../../Types/Types"
import { Users } from "../Database/Users"



class ServerAPI {
    
    userVerification = ({ userName, password, setUserName, setIsUserValidated }: any) => {
        console.log('username and password on server', userName, password);
        // const [userVerified, setUserVerified] = useState<boolean>(false)


        // klovn. det skal være .find !!!!
        const verificationOfUser = Users.map((user)=>{
            if(userName === user.userName && password === user.password){
                // setUserVerified(true)
                setUserName(userName)
                setIsUserValidated(true)
                // console.log('you are logged in');
            }
            else{
                setUserName("")
                setIsUserValidated(false)
                alert("no no no");
            }
            
        })
        // console.log(' :', userVerified);
        return {
            
            
        }
    }
}

export const serverAPI = new ServerAPI(); 