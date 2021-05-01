import React, { useContext } from 'react';
import './Comment.css';
import ModalContext from '../../contexts/ModalContext';

const Comment = ({ email, content, imageURL, lastActiveAt }) => {

    const { setEmail, setLastActiveAt, setIsModalOpen } = useContext(ModalContext);

    const updateModalDetails = (email, lastActiveAt) => {
        setEmail(email);
        var date = new Date(lastActiveAt);
        setLastActiveAt(date.toDateString());
        setIsModalOpen(true);
    }

    return (
        <div className="comment">
            <img src={imageURL}
                 alt={email}
                 className="avatar"
                 width="45"
                 height="45"
                 onClick={() => updateModalDetails(email, lastActiveAt)}
            />
            <div className="text">
                <h4 className="title">{email}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Comment;
