import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            {
                comments.map((comment, i) => {
                    return (
                      <Comment
                        key={`${comment.id}-${i}`}
                        id={comment.id}
                        email={comment.user.email}
                        content={comment.content}
                        imageURL={comment.user.imageURL}
                        lastActiveAt={comment.user.lastActiveAt}
                      />
                    );
                })
            }
        </div>
    );
};

export default CommentList;
