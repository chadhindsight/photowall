import Main from './Main'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';
function mapStateToProps(state) {
    // Populated with the state given to it by the corresponding reducer
    return {
        posts: state.posts,
        comments: state.comments
    }
}
// Used to provide the component access to action creators
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
//connects the component that is going to recive our state from the store as props
const App = withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));

export default App; 

//NB: withRouter makes sure your store and browserRouter can coexist;