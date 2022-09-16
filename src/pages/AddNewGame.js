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
        <NewGameDiv>
            <NewGameForm onSubmit={handleSubmit}>
                <FormTitleP>Add A New Game</FormTitleP>
                <TitleP>Title</TitleP>
                <input value={newGame.title} type="text" placeholder="Title" name="title" onChange={handleChange} />
                <ImageP>Image Url</ImageP>
                <input value={newGame.image_url} type="text" name="image_url" onChange={handleChange} />
                <p>Genre</p>
                <input value={newGame.game_genre} type="text" name="game_genre" onChange={handleChange} />
                <p></p>
                <button>Add New Game</button>
            </NewGameForm>
        </NewGameDiv>
    )
}
export default AddNewGame

const NewGameForm = styled.form`
color: white;
`
const FormTitleP = styled.label`
font-size: 40px;
`
const TitleP = styled.label`
font-size: 30px;
`
const ImageP = styled.label`
font-size: 40px;
`
const NewGameDiv = styled.div`
background-color: #474747;
width: 600px; 
height: 700px;
display: flex;
self-align: center;

`