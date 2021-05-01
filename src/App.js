import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactPaginate from 'react-paginate';
import ModalContext from './contexts/ModalContext';
import commentFeedAPI from './API/commentFeed';
import './styles/reset.css';
import './App.css';
import './styles/Pagination.css';
import './styles/Modal.css';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import CommentList from './components/CommentList/CommentList';

ReactModal.setAppElement('#root');

const App = () => {
    const [comments, setComments] = useState([]);
    const [searchField, setSearchField] = useState('');

    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const commentsPerPage = 5;
    const pagesVisited = pageNumber * commentsPerPage;

    const [email, setEmail] = useState('');
    const [lastActiveAt, setLastActiveAt] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const getComments = () => {
            commentFeedAPI.get('/comments', {
                params: {
                    skip: pagesVisited,
                    limit: commentsPerPage,
                    searchField: searchField
                }
            })
            .then(response => {
                setComments(response.data.comments);
                setPageCount(response.data.count / commentsPerPage);
            })
            .catch(error => console.log(error.response));
        }

        const timerId = setTimeout(getComments,300);
        return () => clearTimeout(timerId);
        
    }, [searchField, pageNumber, pagesVisited]);

    const addComment = (emailInput, messageInput) => {
        commentFeedAPI.post('/comments', {
            email: emailInput,
            message: messageInput
            })
            .then(response => {
                setSearchField('');
                setComments(comments => [...comments, response.data.comment]);
            })
            .catch(error => console.log(error.response));
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{setEmail, setLastActiveAt, setIsModalOpen}}>
            <div className="app">
                <div className="container">
                    <Form addComment={addComment}/>
                    <SearchBar searchField={searchField} setSearchField={setSearchField}/>
                    { comments.length ?
                        (
                            <div className="comments-wrapper">
                                <CommentList comments={comments}/>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName="pagination-btns"
                                    previousLinkClassName="pagination-prev-btn"
                                    nextLinkClassName="pagination-next-btns"
                                    disabledClassName="pagination-disabled"
                                    activeClassName="pagination-active"
                                />
                            </div>
                        ) :
                        (
                            <div className="no-comments">No comments were found. </div>
                        )
                    }
                </div>
                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="modal-content"
                >
                    <p className="text-p">
                        <span className="emphasized">Email:</span>
                        <span>{email}</span>
                    </p>
                    <p className="text-p">
                        <span className="emphasized">Last active at:</span>
                        <span className="number"> {lastActiveAt}</span>
                    </p>
                    <button type="button" onClick={closeModal} className="btn">CLOSE</button>
                </ReactModal>
            </div>
        </ModalContext.Provider>
   );
};

export default App;
