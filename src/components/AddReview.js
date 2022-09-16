import React, { useState } from "react";

function AddReview({ id }) {
    const [newReview, setNewReview] = useState({
        review: "",
        user_id: localStorage.getItem("signedIn"),
        game_id: id,
        rating: "",
    })


    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setNewReview({ ...newReview, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        window.location.reload(false)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Comment</label>
                <input type="text" name="review" onChange={handleChange} />
                <label>Rating</label>
                <input type="number" min="0" max="10" name="rating" onChange={handleChange} />
                <button>submit</button>
            </form>

        </div>
    )
}

export default AddReview