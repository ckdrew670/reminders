import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value})
    }

    addReminder = () => {
        
        this.props.handleSave(this.state.text);
        console.log('this', this); // <-- outputs the whole object
        
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <h1 className="title">Reminders</h1>
                <form className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="I have to ..."
                            onChange={ this.handleChange }
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={ this.addReminder }
                    >Add</button>
                </form>
            </div>
        )
    }
}

export default App;