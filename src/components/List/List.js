import React, { Component } from 'react';
import moment from 'moment';

class List extends Component {

    
    // this delete method has a different syntax from the above so that I can pass in the id with the onClick. It doesn't seem to work the other way?
    deleteReminder(id) {
        
        console.log('deleting in application', id);
        console.log('this.props', this.props);
        this.props.handleDelete(id);
        
    }

    render() {

        let { reminders } = this.props;
        
        return (

            <>
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return (

                            reminder.text === "" ? null :
                            <li 
                                key={ reminder.id }
                                className="list-group-item"
                            >
                                <div className="list-item">{ reminder.text }</div>

                                { reminder.dueDate === "" ? null :
                                <div><em>due { moment(new Date(reminder.dueDate)).fromNow() }</em></div> }

                                <div 
                                    className="btn delete-button"
                                    onClick={ () => this.deleteReminder(reminder.id) }
                                >&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
            </>
        )
    }
}

export default List;