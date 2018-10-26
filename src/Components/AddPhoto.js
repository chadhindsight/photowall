import React, {Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        //disable default page reload
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h1>Photowall</h1>
            <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" />
                        <input type="text" placeholder="Description" />
                        <button>Post</button>
                    </form>
            </div>
        </div>
        ) 
    }
}

export default AddPhoto;