import React from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function InputArea() {
    return (
        <form className="input-area">
            <label>Welcome mi amorcito!</label>
            <Input className="input" placeholder="Username..." variant="soft"/>
            <Input className="input" placeholder="Password..." variant="soft"/>
            <Button className="login-button">Login</Button>
            <Button className="register-button">Register</Button>
        </form>
    )

}

export default InputArea;