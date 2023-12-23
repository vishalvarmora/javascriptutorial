import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classone from "./01Classone";
import Classcompojsx from "./02Classcompojsx";
import Clsscompoprops from "./03Clsscompoprops";
import Classmanicard from "./06Classmanicard";
import Classcompostate from "./07Classcompostate";

class Classcomporoutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Classcompomenu />}>
                        <Route path="Classcompointro" element={<Classcompointro />} />
                        <Route path="Classone" element={<Classone/>} />
                        <Route path="Classcompojsx" element={<Classcompojsx/>}/>
                        <Route path="Clsscompoprops" element={<Clsscompoprops/>}/>
                        <Route path="Classmanicard" element={<Classmanicard/>}/>
                        <Route path="Classcompostate" element={<Classcompostate/>}/>
                        
                    </Route>
                </Routes>
            </>
        )
    }
}

export default Classcomporoutes