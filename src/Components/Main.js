import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from '../redux/actions';

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
                            {/* Passing down all the props using ES6 spread */}
                            <PhotoWall {...this.props}/>
                        </div>
                    )} />
                    <div>
                        <Route path="/AddPhoto" render= {({history}) =>(
                            <AddPhoto {...this.props}/>
                        )} />
                    </div>
               </div>
    }
}
export default Main;