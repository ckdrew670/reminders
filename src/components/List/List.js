import React, { Component } from 'react';

class List extends Component {

    
    // this delete method has a different syntax from the above so that I can pass in the id with the onClick. It doesn't seem to work the other way?
    deleteReminder(id) {
        
        console.log('deleting in application', id);
        console.log('this.props', this.props);
        this.props.handleDelete(id);
        
    }

    listReminders = () => {
        let { reminders } = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return (
                            <li 
                                key={ reminder.id }
                                className="list-group-item"
                            >
                                <div className="list-item">{ reminder.text }</div>
                                <div 
                                    className="btn delete-button"
                                    onClick={ () => this.deleteReminder(reminder.id) }
                                >&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {

        let { reminders } = this.props;
        // console.log('this.props', this.props);
        return (
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return (
                            <li 
                                key={ reminder.id }
                                className="list-group-item"
                            >
                                <div className="list-item">{ reminder.text }</div>
                                <div 
                                    className="btn delete-button"
                                    onClick={ () => this.deleteReminder(reminder.id) }
                                >&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List;