import { connect } from 'react-redux';
import Form from './Form';
import { addReminder } from '../../actions/state';


const mapStateToProps = state => {
    return {
        text: state,
        dueDate: state,
        reminders: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSave: (text, dueDate) => dispatch(addReminder(text, dueDate)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);