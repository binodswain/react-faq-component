import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WithStyleObjComp from "./with-style-parameter";
import WithCssStyleComp from "./with-css-override";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <WithCssStyleComp />
                                <WithStyleObjComp />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

function About() {
    return <h2>About</h2>;
}
