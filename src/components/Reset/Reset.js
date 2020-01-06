import React from "react";

const Reset = ({
    handleReset,
    reminders
}) => (
    reminders === [] ? null :
    <button 
        className="reset btn btn-warning"
        onClick={ handleReset }
    >Clear All</button>

);

export default Reset;