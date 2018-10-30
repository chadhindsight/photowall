import Main from './Main'
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        posts: state
    }
}

//connect the component that is going to recive our state from the store as props
const App = connect(mapStateToProps) (Main);

export default App; 