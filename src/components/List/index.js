import { connect } from 'react-redux';
import List from './List';
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

export default connect(mapStateToProps, mapDispatchToProps)(List);