import { useState } from "react"
import { User } from "../../../Types/Types"
import { Users } from "../Database/Users"

class ServerAPI {
    
    userVerification = ({ userName, password, setUserName, setIsUserValidated }: any) => {
        
        const mapUsers = Users.map((user)=>{
            if(userName === user.userName && password === user.password){
                setUserName(userName)
                setIsUserValidated(true)
            }
        })
    }

    getUser = ({userLoggedIn}:any) => {
        const user = Users.find((element) => element === userLoggedIn)
        return user
    }
}

export const serverAPI = new ServerAPI(); 