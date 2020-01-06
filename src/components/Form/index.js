import { connect } from 'react-redux';
import Form from './Form';
import { addReminder } from '../../actions/state';


const mapStateToProps = state => {
    return {
        text: state,
        reminders: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSave: (value) => dispatch(addReminder(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);