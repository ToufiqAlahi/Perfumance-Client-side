import React from "react";
import './comments.css';

const Comment = () => {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className="container comments">
            <h2 className="text-center text-warning">Please Leave a Comment</h2>
            <div class="form-group purple-border w-50 mx-auto mt-4">
                <label for="exampleFormControlTextarea4">
                    Enter your Comment Below
                </label>
                <textarea
                    class="form-control"
                    id="exampleFormControlTextarea4"
                    rows="3"
                ></textarea>
                <button
                    onClick={refreshPage}
                    className="btn btn-warning text-center mt-2 mb-4 comment-btn"
                >
                    Comment
                </button>
            </div>
        </div>
    );
};

export default Comment;
