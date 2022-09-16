import React, { useEffect, useState } from 'react'

function Review({ id, comment, rating, user }) {
    const [userInfo, setUserInfo] = useState()
    const [isUpdating, setIsUpdating] = useState(false)
    const [updatedComment, setUpdatedComment] = useState(comment)
    // const [sentComment, setSentComment] = useState({
    //     review: ""
    // })

    useEffect(() => {
        fetch(`http://localhost:9292/users/${user}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])

    const handleClick = () => {

        fetch(`http://localhost:9292/reviews/${id}`, { method: 'DELETE' })
            .then(res => res.json)
        window.location.reload(false)
    }

    const handleSubmitTwo = (event) => {
        event.preventDefault()
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                review: updatedComment
            }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(setIsUpdating(false))
    }


    return (
        <div>
            {userInfo && <>
                <div></div>
                <p><span>{userInfo.username}</span>    Rating: <span>{rating}</span></p>
                {isUpdating ? (
                    <form onSubmit={handleSubmitTwo}>
                        <input
                            value={updatedComment}
                            onChange={(e) => setUpdatedComment(e.target.value)}
                        />
                        <button type="submit">Update</button>
                        <button onClick={() => {
                            setUpdatedComment(comment)
                            setIsUpdating(false)
                        }}>X</button>
                    </form>
                ) : (
                    <p>{updatedComment}</p>
                )}
                <button onClick={handleClick}>Remove</button>
                <button onClick={() => setIsUpdating(true)}>Update</button>
            </>}
        </div>
    )
}

export default Review