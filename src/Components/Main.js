import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single  from './Single';

class Main extends Component {
   componentDidMount() {
       this.props.startLoadingPost()
   }

    // Render method should never do any asychronous requests
    render() {
        return <div>
                    <h1>
                        <Link to= "/">Photowall</Link>
                    </h1>
                    <Route exact path="/" render={()=>(
                        <div>
                            {/* Passing down all the props using ES6 spread */}
                            <PhotoWall {...this.props}/>
                        </div>
                    )} />
                        <Route path="/AddPhoto" render= {({history}) =>(
                            <AddPhoto {...this.props} onHistory={history} />
                        )} />
                    
                    <Route path="/single/:id" render ={(params) => (
                <Single {...this.props} {...params}/>
                    )}/>
               </div>
    }
}
export default Main;