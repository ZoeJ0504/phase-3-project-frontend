import React, { useState } from "react"
import styled from "styled-components"

function AddNewGame() {
    const [newGame, setNewGame] = useState({
        title: "",
        image_url: "",
        game_genre: "",
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setNewGame({ ...newGame, [name]: value })
    }
    console.log(newGame)
    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/games', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newGame)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <BigDiv>
            <NewGameDiv>
                <FormTitleP>Add A New Game</FormTitleP>
                <NewGameForm onSubmit={handleSubmit}>
                    <TitleP>Title</TitleP>
                    <Input value={newGame.title} type="text" placeholder="Title" name="title" onChange={handleChange} />
                    <ImageP>Image Url</ImageP>
                    <Input value={newGame.image_url} type="text" name="image_url" onChange={handleChange} />
                    <GenreP>Genre</GenreP>
                    <Input value={newGame.game_genre} type="text" name="game_genre" onChange={handleChange} />
                    <p></p>
                    <GameButton>Add New Game</GameButton>
                </NewGameForm>
            </NewGameDiv>
        </BigDiv>
    )
}
export default AddNewGame

const NewGameForm = styled.form`
color: white;
`
const FormTitleP = styled.p`
font-size: 40px;
`
const TitleP = styled.p`
font-size: 30px;
`
const ImageP = styled.p`
font-size: 40px;
`
const NewGameDiv = styled.div`
background-color: #474747;
width: 600px; 
height: 700px;
`

const GameButton = styled.button`
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

const Input = styled.input`
font-size: 20px;
padding: 10px;
border-radius: 12px;

`

const GenreP = styled.p`
font-size: 40px;
`

const BigDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 30px;
`