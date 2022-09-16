import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function GameCard({ title, image, genre, id }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/more_info/${id}`)
    }

    return (
        <GameCardDiv>
            <TitleP>{title}</TitleP>
            <GamePic src={image} alt={title} />
            <GenreP>{genre}</GenreP>
            <MoreInfoButton onClick={handleClick}>More Info</MoreInfoButton>
        </GameCardDiv>
    )
}
export default GameCard

const GameCardDiv = styled.div`
background-color: #474747;
width: 300px;
height: 400px;
border-radius: 12px;
margin: 20px;
font-size: 20px;
`
const GamePic = styled.img`
width: 150px;
height: 200px;
border-radius: 12px;
align-self: center;
`
const TitleP = styled.div`
font-size: 25px;
display: flex;
align-self: flex-start;
text-align: center;
`
const MoreInfoButton = styled.button`
border-radius: 12px;
padding: 15px; 
display: center;
font-size: 15px;
background-color: black;
color: white;
&&:hover {
    color: black;
    background-color: white;
    cursor: pointer;
}
`
const GenreP = styled.p`
color: #E0E0CE;
font-size: 15px;
`