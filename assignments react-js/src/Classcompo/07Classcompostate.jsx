import React from "react";
import { Component } from "react";


class Classcompostate extends Component {

    constructor() {
        super()
        this.state = {
            count: 0 
        }
    }
    update = () => {
        console.log("update", "count");
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {

        return (
            <>
                <h1>state</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.update}>update state</button>
                <button onClick={this.decrement}>decrement</button>
            </>
        );
    }
}

export default Classcompostate;