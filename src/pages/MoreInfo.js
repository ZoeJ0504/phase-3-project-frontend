import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import AddReview from "../components/AddReview"
import Review from "../components/Review"

function MoreInfo() {
    const [game, setGame] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/games/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }, [])


    console.log(game)
    return (
        <MoreInfoDiv>
            {game && <>
                <p>{game.title}</p>
                <img src={game.image_url} alt={game.title} />
                <p>{game.game_genre}</p>
                <AddReview />
                {
                    game.reviews.map(item =>
                        <Review
                            key={game.id}
                            comment={item.review}
                            rating={item.rating}
                            user={item.user_id} />
                    )
                }
            </>}
        </MoreInfoDiv>
    )
}

export default MoreInfo

const MoreInfoDiv = styled.div`
background-color: #474747;
`