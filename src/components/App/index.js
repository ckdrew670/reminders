import { connect } from 'react-redux';
import App from './App';
import { addReminder, deleteReminder } from '../../actions/state';


const mapStateToProps = state => {
    return {
        reminders: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSave: (value) => dispatch(addReminder(value)),
        handleDelete: (id) => dispatch(deleteReminder(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);