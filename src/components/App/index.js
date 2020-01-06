import { connect } from 'react-redux';
import App from './App';
import { deleteReminder } from '../../actions/state';


const mapStateToProps = state => {
    return {
        reminders: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => dispatch(deleteReminder(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);