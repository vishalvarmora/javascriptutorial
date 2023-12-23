import React from "react";
import { Component } from "react";



class Democompo extends Component {
    render() {
        return (
            <>
            <h1>demo</h1>
            <p>{this.props.user}</p>
            </>
        );
    }
}

 export default Democompo ;
