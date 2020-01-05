import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        
        this.addReminder = this.addReminder.bind(this);
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
                            >{ reminder.text }</li>
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