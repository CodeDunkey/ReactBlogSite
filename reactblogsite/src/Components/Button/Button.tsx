import classNames from 'classnames';
import './Button.scss'

export enum Type {
    LOGIN = "logIn",
    SIGNUP = "signUp",
    DELETEUSER = "deleteUser",
    BLOG = "blog",
    POST = "post",
    COMMENT = "comment",
    SAVE = "save",
    EXIT = "exit",
    EDIT = "Edit",
}
export interface ButtonProps {
    onClick: () => void;
    text: string;
    buttonType: Type;
}

export const Button = ({ onClick, text, buttonType}: ButtonProps) => {

    const classNameString = classNames(`button__${buttonType}`)

    return (
        <button className={classNameString} onClick={onClick}>{text}</button>
    )
}
