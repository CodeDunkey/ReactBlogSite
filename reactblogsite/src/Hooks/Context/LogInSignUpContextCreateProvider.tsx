import { ReactElement, createContext, useState, useRef, MutableRefObject } from "react"

export type LogInSignUpContextValue = {
    logIn: boolean,
    setLogIn: (logIn: boolean) => void,
    keyDown: string,
    setKeyDown: (keyDown: string) => void,
    inputUser: MutableRefObject<string>,
    inputPassword: MutableRefObject<string>,
}
export const LogInSignUpContext = createContext<LogInSignUpContextValue>({
    logIn: false,
    setLogIn: () => { },
    keyDown: "",
    setKeyDown: () => {},
    inputUser: useRef<string>(),
    inputPassword: ,
});

export const LogInSignUpContextProvider = ({ children }: { children: ReactElement }) => {

    const [logIn, setLogIn] = useState<boolean>(false)
    const [keyDown, setKeyDown] = useState("")
    let inputUser = useRef<string>("")
    let inputPassword = useRef<string>("")
    let inputEmail = useRef<string>("")
    let inputFirstName = useRef<string>("")
    let inputLastName = useRef<string>("")
    return (
        <LogInSignUpContext.Provider value={{ 
            logIn, 
            setLogIn, 
            keyDown, 
            setKeyDown,
            inputUser,
            inputPassword,
            }}>
            {children}
        </LogInSignUpContext.Provider>
    )
}



// const { user, setUser, validateUserAndPassword } = useUser();
// // isUserValidated, setIsUserValidated, 
// const { addUser } = useAddNewUser();



// if (logIn && keyDown === 'Enter') {

//     if (inputUser.current !== "" && inputPassword.current !== "") {
//         validateUserAndPassword({ userName: inputUser.current, password: inputPassword.current });

//     }
//     inputUser.current = "";
//     inputPassword.current = "";
// }
// if (singUp && keyDown === 'Enter') {

//     if (
//         inputUser.current !== "" &&
//         inputPassword.current !== "" &&
//         inputEmail.current !== "" &&
//         inputFirstName.current !== "" &&
//         inputLastName.current !== ""
//     ) {
//         addUser({
//             userName: inputUser.current,
//             password: inputPassword.current,
//             email: inputEmail.current,
//             firstName: inputFirstName.current,
//             lastName: inputLastName.current,
//         });

//     }
//     inputUser.current = "";
//     inputPassword.current = "";
//     inputEmail.current = "";
//     inputFirstName.current = "";
//     inputLastName.current = "";
//     setSignUp(!singUp)
// }

// const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
//     setKeyDown(event.key)
// }
// const textInputUser = (x: ChangeEvent<HTMLInputElement>) => {
//     inputUser.current = x.target.value;
// }
// const textInputPassword = (x: ChangeEvent<HTMLInputElement>) => {
//     inputPassword.current = x.target.value
// }
// const textinputEmail = (x: ChangeEvent<HTMLInputElement>) => {
//     inputEmail.current = x.target.value;
// }
// const textinputFirstName = (x: ChangeEvent<HTMLInputElement>) => {
//     inputFirstName.current = x.target.value
// }
// const textinputLastName = (x: ChangeEvent<HTMLInputElement>) => {
//     inputLastName.current = x.target.value;
// }

// const toggleLogIn = () => {
//     setLogIn(!logIn)
// }
// const toggleLogOut = () => {
//     setUser({
//         userName: "",
//         userId: 0,
//         createdDateTime: "",
//         email: "",
//         password: "",
//         firstName: "",
//         lastName: "",
//     })
//     // setIsUserValidated(false)
//     setLogIn(!logIn)
// }
// const toggleSignUp = () => {
//     setSignUp(!singUp)
// }

// const reactModalStyles = {
//     overlay: {
//         backgroundColor: "rgba(150, 150, 150, 0.75)"
//     },

// }
// const modalContentStyles: React.CSSProperties = {
//     position: 'absolute',
//     top: '100px',
//     left: '500px',
//     right: '500px',
//     bottom: '200px',
//     border: '1px solid #ccc',
//     background: '#fff',
//     overflow: 'auto',
//     WebkitOverflowScrolling: 'touch',
//     borderRadius: '4px',
//     outline: 'none',
//     padding: '40px',
// }

// return (
//     <div className="modalWrapper">

//         {!logIn && <Button buttonType={Type.SIGNUP} text="Sign up" onClick={toggleSignUp}></Button>}
//         {
//             !user
//             // !isUserValidated 
//             && <Button buttonType={Type.LOGIN} text="Log in" onClick={toggleLogIn} />}
//         {
//             user
//             // isUserValidated 
//             && <Button buttonType={Type.LOGIN} text="Log out" onClick={toggleLogOut} />}
//         <ReactModal style={{ overlay: reactModalStyles.overlay, content: modalContentStyles }} isOpen={logIn &&
//             !user
//             // !isUserValidated
//         } >
//             <input onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name'></input>
//             <input onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input>
//             <Button buttonType={Type.EXIT} text="X" onClick={toggleLogIn}></Button>
//         </ReactModal>
//         <ReactModal style={{ overlay: reactModalStyles.overlay, content: modalContentStyles }} isOpen={singUp} >
//             <label htmlFor="user name" >User name</label>
//             <input id="user name" onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name'></input>
//             <br></br>
//             <label htmlFor="password" >Password</label>
//             <input id="password" onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input>
//             <br></br>
//             <label htmlFor="email" >Email</label>
//             <input id="email" onChange={textinputEmail} onKeyDown={keyPress} placeholder='Email'></input>
//             <br></br>
//             <label htmlFor="first name" >First name</label>
//             <input id="first name" onChange={textinputFirstName} onKeyDown={keyPress} placeholder='First name'></input>
//             <br></br>
//             <label htmlFor="Last name" >Last name</label>
//             <input id="Last name" onChange={textinputLastName} onKeyDown={keyPress} placeholder='Last name'></input>
//             <Button buttonType={Type.EXIT} text="X" onClick={toggleSignUp}></Button>
//         </ReactModal>
//     </div>
// )
// }