import React from 'react'

const Comment = props => {
    const coms = props.comments.map(comment => {
        return(
            <div className="comment">
                <a className="avatar">
                    <img src={comment.avatar} />
                </a>
                <div className="content">
                    <a className="author">
                        {comment.user}
                    </a>
                    <div className="metadata">
                        {comment.ctime} hr ago
                    </div>
                    <div className="text">
                        {comment.content}
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="ui comments">
            {coms}
        </div>
    )
}

export default Comment