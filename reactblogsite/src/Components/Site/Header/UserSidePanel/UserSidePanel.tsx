import './UserSidePanel.scss'
import { useUserContext } from '../../../../Hooks/Context/useContext/useUserContext'
import { ChangeEvent, useRef, useState } from 'react'
import { useEditUserInfo } from '../../../../Hooks/Context/useEditUserInfo';
import { Button, Type } from '../../../Button/Button';
import { User } from '../../../../Types/Types';
export const UserSidePanel = () => {
    const { editUserInfo } = useEditUserInfo();
    const { user, setUser } = useUserContext();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [editUserInfomation, setEditUserInfo] = useState<User | undefined>(undefined)
    // let editUserInfo = useRef<User>()
    if (user !== undefined && editUserInfomation === undefined) {
        setEditUserInfo({
            userId: user.userId,
            createdDateTime: user.createdDateTime,
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
        })
        // editUserInfo.current = {
        //     userId: user.userId,
        //     createdDateTime: user.createdDateTime,
        //     email: user.email,
        //     password: user.password,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     userName: user.userName,
        // }
    }
    // let textEmail = useRef<string>();
    // textEmail.current = user?.email;
    const textinputUserName = (x: ChangeEvent<HTMLInputElement>) => {
        if (editUserInfomation !== undefined) {
            setEditUserInfo({ ...editUserInfomation, userName: x.target.value });
        }
    }
    const textinputFirstName = (x: ChangeEvent<HTMLInputElement>) => {
        if (editUserInfomation !== undefined) {
            setEditUserInfo({ ...editUserInfomation, firstName: x.target.value });
        }
    }
    const textinputLastName = (x: ChangeEvent<HTMLInputElement>) => {
        if (editUserInfomation !== undefined) {
            setEditUserInfo({ ...editUserInfomation, lastName: x.target.value });
        }
    }
    const textinputEmail = (x: ChangeEvent<HTMLInputElement>) => {
        if (editUserInfomation !== undefined) {
            setEditUserInfo({ ...editUserInfomation, email: x.target.value });
        }
    }
    const textInputPassword = (x: ChangeEvent<HTMLInputElement>) => {
        if (editUserInfomation !== undefined) {
            setEditUserInfo({ ...editUserInfomation, password: x.target.value });
        }
    }
    // , email: x.target.value
    const openBurgerMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeBurgerMenu = () => {
        setOpenMenu(!openMenu)
    }
    const saveChanges = async () => {
        let userInformationEdited = undefined;
        if (editUserInfomation !== undefined && user !== undefined){
            userInformationEdited = await editUserInfo({user: user, userInfoEdited: editUserInfomation})
            if (userInformationEdited !== undefined){
                console.log('userInformationEdited', userInformationEdited);
                // setUser({...userInformationEdited})
            }
        }
        setOpenMenu(!openMenu)
    }
    // console.log('editUserInfo', editUserInfo.current);
    // console.log('textEmail.current', textEmail.current);
    // console.log('editUserInfomation', editUserInfomation);
    return (
        <div>
            {!openMenu && <div id="openburgerMenu" className="openburgerMenu" onClick={openBurgerMenu}>☰</div>}
            {openMenu && <div id="burgerMenu" className="burgerMenu">
                {user && <div>
                    <label htmlFor='userName'>userName</label>
                    <input id="userName" value={editUserInfomation?.userName} onChange={textinputUserName} placeholder={user.userName} />
                    <label htmlFor='firstName'>firstName</label>
                    <input id="firstName" value={editUserInfomation?.firstName} onChange={textinputFirstName} placeholder={user.firstName} />
                    <label htmlFor='lastName'>email</label>
                    <input id="lastName" value={editUserInfomation?.lastName} onChange={textinputLastName} placeholder={user.lastName} />
                    <label htmlFor='email'>email</label>
                    <input id="email" value={editUserInfomation?.email} onChange={textinputEmail} placeholder={user.email} />
                    <label htmlFor='password'>password</label>
                    <input id="password" value={editUserInfomation?.password} onChange={textInputPassword} placeholder={user.password} />
                    {<Button buttonType={Type.SAVE} text='Save changes' onClick={saveChanges} />}
                </div>}
                <div id="closeBurgerMenu" className="closeBurgerMenu" onClick={closeBurgerMenu}>X</div>
            </div>}
        </div>
    )
}

