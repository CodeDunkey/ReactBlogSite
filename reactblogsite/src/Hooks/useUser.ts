import { useEffect, useState } from "react";
import { useLogIn } from "./useLogIn";
import { clientApi } from "../Utilities/ClientAPI";
export const useUser = () => {
    const [user, setUser] = useState();
    const { userName } = useLogIn();

    // console.log("userName in useUser: ", userName);
    // useEffect(() => {
    //     // console.log("userName in useUser-useEffect: ", userName);

    //     const getUser: any = clientApi.getUser({userName})
    //     console.log("getUser", )
    //     setUser(user)
    // }, [userName])
    // console.log("user in useUser", user)
    return {
        user
    }
}