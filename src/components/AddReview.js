import React from "react";

function AddReview() {

    return (
        <div>
            <form>
                <label>Comment</label>
                <input type="text" />
                <label>Rating</label>
                <input type="number" min="0" max="10" />
            </form>

        </div>
    )
}

export default AddReview