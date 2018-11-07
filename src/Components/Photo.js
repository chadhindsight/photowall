import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photo (props) {
    
        const post = props.post
        return <figure className="figure"> 
            <Link to={`/single/${post.id}`} ><img className="photo" src={post.imageLink} alt={post.description} /></Link>
                    <figcaption><p>{post.description}</p></figcaption>
                    <div className="button-container">
                    <button  onClick ={()=>{
                        props.startRemovingPost(props.index, post.id);
                       props.history.push('/')
                    }}>Remove</button>
                <Link className="button" to={`/single/${post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble"> </div>
                        {/* shows the length of comments array if array length is not zero */}
                        {props.comments[post.Id] ? props.comments[post.Id].length : 0}
                    </div>
                </Link>
                    </div>
                </figure>
    
}
Photo.propTypes = {
    post: propTypes.object.isRequired,
}

export default Photo;