import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

class Classcompomenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro">Classcompointro</Link></li>
                    <li><Link to="Classone">Classone</Link></li>
                    <li><Link to="Classcompojsx">Classcompojsx</Link></li>
                    <li><Link to="Clsscompoprops">Clsscompoprops</Link></li>
                    {/* <li><Link to="Classcard">Classcard</Link></li> */}
                    <li><Link to="Classmanicard">Classmanicard</Link></li>
                    <li><Link to="Classcompostate">Classcompostate</Link></li>
                </ul>
                <Outlet/>
            </>
        )
    }
}

export default Classcompomenu