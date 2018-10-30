import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component {
    constructor() {
        // If extending to another class, call super to use 'this'
        super()
            }

    // Render method should never do any asychronous requests
    render() {
        return <div>
                    <Route exact path="/" render={()=>(
                        <div>
                            <Title title={'PhotoWall'} />
                            <PhotoWall posts={this.props.posts}/>
                        </div>
                    )} />
                    <div>
                        {/* <Route path="/AddPhoto" render= {({history}) =>(
                            <AddPhoto onAddPhoto ={(addedPost) => {
                                this.addPhoto(addedPost)
                                history.push('/')
                            }}/>
                        )} /> */}
                    </div>
               </div>
    }
}
export default Main;