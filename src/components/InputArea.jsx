import React, { useState } from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Switch from '@mui/joy/Switch';

function InputArea() {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <form className="input-area">
            <label className="intro">Welcome! Please sign in or register a new account.</label>
            <Input className="input" placeholder={isRegistered ? "Enter your new username." : "Username"} variant="soft"/>
            <Input className="input" placeholder={isRegistered ? "Enter your new password." : "Password"} variant="soft"/>
            {isRegistered && <Input className="input" placeholder="Please confirm your password." variant="soft"/>}
            <Button className="login-button">{isRegistered ? "Register" : "Login"}</Button>
            <label> New user? <Switch onChange={(event) => setIsRegistered(event.target.checked)}/></label>
        </form>
    )

}

export default InputArea;