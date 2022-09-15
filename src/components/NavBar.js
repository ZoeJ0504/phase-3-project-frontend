import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


function NavBar() {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }

    const navigateGames = () => {
        navigate('/games')
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div>
            <NavBarDiv>
                <TitleSpan>Game Rater</TitleSpan>
                <LinkSpan onClick={navigateHome}>Home</LinkSpan>
                <LinkSpan onClick={navigateGames}>Games</LinkSpan>
                <LinkSpan onClick={navigateLogin}>Login</LinkSpan>
            </NavBarDiv>
        </div>
    )
}

export default NavBar

const NavBarDiv = styled.div`
background-color: #AD343E; 
padding: 20px;
display:flex;
justify-content: space-around;
align-items: baseline;
`
const LinkSpan = styled.div`
font-size: 35px;
&&:hover {
    color:white;
    cursor: pointer;
}
`
const TitleSpan = styled.span`
font-size: 50px;
`
