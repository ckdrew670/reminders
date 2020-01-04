import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="title">Reminders</h1>
                <form className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="I have to ..."
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                    >Add</button>
                </form>
            </div>
        )
    }
}

export default App;