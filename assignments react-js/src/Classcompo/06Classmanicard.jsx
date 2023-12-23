import React from "react";
import { Component } from "react";
import Classcard from "./05Classcard";

class Classmanicard extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/254/400/300" btn="vishal-btn" data="Some quick example text to build on the card " title="vishal" />
                    </div>
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/248/400/300" btn="vishal-btn" data="Some quick example text to build on the card " title="jay" />
                    </div>
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/249/400/300" btn="vishal-btn" data="Some quick example text to build on the card " title="ketan" />
                    </div>
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/251/400/300" btn="vishal-btn" data="Some quick example text to build on the card " title="vimal" />
                    </div>
                </div>
            </>
        );
    }
}

export default Classmanicard;
