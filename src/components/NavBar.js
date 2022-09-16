import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyReviews from '../pages/MyReviews'


function NavBar({ isSubmitted }) {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }

    const navigateGames = () => {
        navigate('/games')
    }

    const navigateLogin = () => {
        navigate('/login')
        window.location.reload(false)
    }

    const navigateMyReviews = () => {
        navigate('/my_reviews')
    }
    return (
        <div>
            <NavBarDiv>
                <TitleSpan>Game Rater</TitleSpan>
                <LinkSpan onClick={navigateHome}>Home</LinkSpan>
                <LinkSpan onClick={navigateGames}>Games</LinkSpan>
                {isSubmitted ?
                    <>
                        <LinkSpan onClick={navigateMyReviews}>MyReviews</LinkSpan>
                        <LinkSpan onClick={navigateLogin}>SignOut</LinkSpan>
                    </>
                    : <LinkSpan onClick={navigateLogin}>Login</LinkSpan>}
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
