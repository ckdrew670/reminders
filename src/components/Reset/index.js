import { connect } from "react-redux";
import Reset from "./Reset";
import { clearReminders } from "../../actions/state";

const mapStateToProps = state => {
    return {
        text: state.text,
        dueDate: state.dueDate,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
      handleReset: () => dispatch(clearReminders()),

    }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Reset);