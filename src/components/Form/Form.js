import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            dueDate: "",
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.addReminder = this.addReminder.bind(this);
       // this.deleteReminder = this.deleteReminder.bind(this);
    }

    handleChange = (e) => {
        this.setState({ 
            text: e.target.value,
            })
    }

    handleDueDate = (e) => {
        this.setState({
            dueDate: e.target.value,
        })
    }

    addReminder = (e) => {
        let { text, dueDate } = this.state;

        e.preventDefault();
        this.props.handleSave(text, dueDate);
        
        this.setState({ 
            text: "", 
            dueDate: "",
        });

        console.log('this', this); // <-- outputs the whole object
        
    }

    render() {
        let { text, dueDate } = this.state;
         
        return (
    
            <form 
                className="form"
                onSubmit={ this.addReminder }>
                <label className="form-label">Enter a task:</label>
                <input 
                    type="text"
                    className="form-control"
                    value={ text }
                    placeholder="I have to ..."
                    onChange={ this.handleChange }
                />
                <label className="form-label">Enter a due date:</label>
                <input 
                    className="form-control"
                    type="date"
                    value={ dueDate }
                    onChange={ this.handleDueDate }
                />

                <input
                    type="submit"
                    className="btn btn-success form-button"
                    value="Add Reminder"
                />
            </form>
        )
    }
}

export default Form;