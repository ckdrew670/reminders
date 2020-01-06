import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        
        this.addReminder = this.addReminder.bind(this);
       // this.deleteReminder = this.deleteReminder.bind(this);
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value})
    }

    addReminder = (e) => {
        let { text } = this.state;

        e.preventDefault();
        this.props.handleSave(text);

        console.log('this', this); // <-- outputs the whole object
        
    }
    
    // this delete method has a different syntax from the above so that I can pass in the id with the onClick. It doesn't seem to work the other way?
    deleteReminder(id) {
        
        console.log('deleting in application', id);
        console.log('this.props', this.props);
        this.props.handleDelete(id);
        
    }

    listReminders = () => {
        let { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li 
                                key={ reminder.id }
                                className="list-group-item"
                            >
                                <div className="list-item">{ reminder.text }</div>
                                <button 
                                    className="btn delete-button"
                                    onClick={ () => this.deleteReminder(reminder.id) }
                                >&#x2715;</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        // console.log('this.props', this.props);
        return (
            <div className="App">
                <h1 className="title">Reminders</h1>
                <form 
                    className="form-inline"
                    onSubmit={ this.addReminder }>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="I have to ..."
                            onChange={ this.handleChange }
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-success"
                        value="Add Reminder"
                    />
                </form>
                { this.listReminders() }
            </div>
        )
    }
}

export default App;