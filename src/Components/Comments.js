import React, {Component} from 'react';

class Comments extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }    

    handleSubmit(event) {
        event.preventDefault()
        const comment = event.target.elements.comment.value;
        this.props.startAddingComment(comment, this.props.id);
        event.target.elements.comment.value = ''
    }

    render() {
        console.log(this.props.comments)
       return  <div>
           {
               this.props.comments.map((comment, index) =>{
                   return (
                       <p key={index}>{comment}</p>
                   )
               })
           }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comments" name="comment" />
                    <input type="submit" placeholder="submit" hidden/>
                </form>
        </div>
    }
}
export default Comments;