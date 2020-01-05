import { connect } from 'react-redux';
import App from './App';
import { addReminder } from '../../actions/state';

const mapDispatchToProps = dispatch => {
    return {
        handleSave: value => dispatch(addReminder(value)),
    };
}

export default connect(null, mapDispatchToProps)(App);