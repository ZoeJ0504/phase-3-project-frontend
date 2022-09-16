import React, { useEffect, useState } from 'react'

function Review({ comment, rating, user }) {
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${user}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])

    return (
        <div>
            {userInfo && <>
                <div></div>
                <p><span>{userInfo.username}</span>    Rating: <span>{rating}</span></p>
                <p>{comment}</p>
            </>}
        </div>
    )
}

export default Review