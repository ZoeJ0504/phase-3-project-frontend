import React from "react"
import styled from "styled-components"

function Home() {

    return (
        <div>
            <HomeTitle>Welcome to Game Rater!</HomeTitle>
            <BigDiv>
                <p></p>
                <HomeDiv>
                    <HomeP>What is Game Rater?</HomeP>
                    <HomeP>Game Rater allows users from all around the world to connect, rate, and review all their favorite games!
                        Through Gamer Rater, you can browse a wide variety of games, and if you don't see your game you can add it!
                        You can also leave reviews, and comment on games that are on the site!
                        If you decide you wish to delete your comment, you have the ability to!
                    </HomeP>
                </HomeDiv>
                <div>
                    <iframe width="550" height="400"
                        title="Call Of Duty: Vanguard Solo Campaign Review" src="https://www.youtube.com/embed/hDMXN82aQnY?autoplay=1&mute=1">
                    </iframe>
                    <p></p>
                    <iframe width="550" height="400"
                        title="Forza Horizon 5 Review" src="https://www.youtube.com/embed/98wujVDdnNQ?autoplay=1&mute=1">
                    </iframe>


                </div>

            </BigDiv>
        </div>
    )
}

export default Home

const HomeTitle = styled.h1`
color: white;
font-size: 60px;`

const HomeDiv = styled.div`
background-color: #474747;
max-width: 600px;
max-height: 600px;
border-radius: 12px;
padding: 30px;
`
const HomeP = styled.p`
color: white;
max-width:600px;
max-height: auto;
font-size: 30px;
`
const BigDiv = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

