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
        this.setState({ text: "" });

        console.log('this', this); // <-- outputs the whole object
        
    }

    render() {
        // console.log('this.props', this.props);
        return (
    
            <form 
                className="form"
                onSubmit={ this.addReminder }>
                <div>
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
        )
    }
}

export default Form;