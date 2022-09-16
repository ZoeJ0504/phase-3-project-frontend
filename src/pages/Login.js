import React, { useEffect, useState } from 'react'
import styled from "styled-components"

function Login({ handleSubmit, errorMessages, isSubmitted }) {
    const [database, setDatabase] = useState([])


    useEffect(() => {
        fetch("http://localhost:9292/users")
            .then(res => res.json())
            .then(data => setDatabase(data))
    }, [])
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleHandlerSubmit = (event) => {
        event.preventDefault()
        handleSubmit(database, errors)
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <FormDiv className="form">
            <form onSubmit={handleHandlerSubmit}>
                <div className="input-container">
                    <Label>Username </Label>
                    <Input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <Label>Password </Label>
                    <Input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <InputSubmit type="submit" />
                </div>
            </form>
        </FormDiv>
    );





    return (
        <div className="Login">
            <SignInDiv className="title">Sign In</SignInDiv>
            <BigDiv className="login-form">

                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </BigDiv>
        </div>
    )
}
export default Login

const Input = styled.input`
font-size: 20px;
padding: 10px;
border-radius: 12px;
background-color: white;
`

const Label = styled.label`
color: black;
`

const InputSubmit = styled.input`
font-size: 20px;
padding: 10px;
border-radius: 12px;
background-color: white;

`

const FormDiv = styled.div`
background-color: #474747;
max-width: 600px;
max-height: 600px;
border-radius: 12px;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

`

const SignInDiv = styled.div`
font-size: 20px;
padding: 10px;
color: white;
`
const BigDiv = styled.div`
background-color: #474747;
max-width: 500px;
height: auto;
`