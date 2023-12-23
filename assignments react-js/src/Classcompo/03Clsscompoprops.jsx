import React from "react";
import { Component } from "react";
import Democompo from "./04Democompo";

class Clsscompoprops extends Component {
    render() {
        let user = "vishal"
        return (
            <>
            <h1>Clsscompoprops</h1>
            <Democompo user={user}/>
            </>
        );
    }
}

export default Clsscompoprops;