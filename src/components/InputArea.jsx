import React from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function InputArea() {
    return (
        <form className="input-area">
            <Input className="input" placeholder="Username..."/>
            <Input className="input" placeholder="Password..."/>
            <Button>Login</Button>
        </form>
    )

}

export default InputArea;