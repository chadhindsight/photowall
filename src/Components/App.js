import Main from './Main'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePost} from '../redux/actions';
import {withRouter} from 'react-router';
function mapStateToProps(state) {
    return {
        posts: state
    }
}
// Used to provide the component access to action creators
function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePost}, dispatch);
}
//connect the component that is going to recive our state from the store as props
const App = withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));

export default App; 

//16: withRouter makes sure your store and browserRouter can coexist;