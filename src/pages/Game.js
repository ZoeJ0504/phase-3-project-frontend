import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GameCard from "../components/GameCard"

function Game() {
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:9292/games")
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    console.log(games)
    const navigateNewPage = () => {
        navigate('/add_new_game')
    }

    return (
        <div>
            <PageTitleP>See a game you own and it's not here?</PageTitleP>
            <AddGame onClick={navigateNewPage}>Click Here to Add Your Game</AddGame>
            <GameCardDiv>
                {games.map(game => {
                    return (
                        <GameCard
                            key={game.id}
                            title={game.title}
                            image={game.image_url}
                            genre={game.game_genre}
                        />
                    )
                })}
            </GameCardDiv>
        </div>
    )
}
export default Game

const GameCardDiv = styled.div`
display: flex;
justify-content: space-evenly;
align-item: basline;
flex-wrap: wrap;
`
const PageTitleP = styled.p`
color: white;
font-size: 30px;
`
const AddGame = styled.button`
font-size: 20px;
padding: 10px;
border-radius: 12px;
background-color: white;
&&:hover{
background-color: black;
color: white;
cursor: pointer;
}
`