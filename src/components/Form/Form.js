import React, { Component } from 'react';

class Form extends Component {

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
        this.setState({ text: " "});

        console.log('this', this); // <-- outputs the whole object
        
    }

    render() {
        let { text } = this.state;
         
        return (
    
            <form 
                className="form"
                onSubmit={ this.addReminder }>
                
                <input 
                    type="text"
                    className="form-control"
                    value={ text }
                    placeholder="I have to ..."
                    onChange={ this.handleChange }
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