import { ReactElement, createContext, useContext, useState } from "react";

const UserName = createContext<string>("");
export const useUserName = () => { return useContext(UserName)}

const SetUserName = createContext<any>("");

export const useSetUserName = () => { return useContext(SetUserName)}

// const Password = createContext<string>("");
// export const usePassword = () => { return useContext(Password)}

export const SignInContext = ({ children }: { children: ReactElement }) => {

    const [userName, setUserName] = useState<string>("")
    // const userName: string = "";
    // const password: string = "";

    // console.log('userName', userName);
    return (
        <UserName.Provider value={userName}>
            <SetUserName.Provider value={setUserName}>
                {children}
            </SetUserName.Provider>
        </UserName.Provider>
    )
}


{/* <Password.Provider value={password}> */}
{/* </Password.Provider> */}