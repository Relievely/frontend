import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/journal">Journal</Link>
                        </li>
                        <li>
                            <Link to="/relieve">Relieve</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/journal">
                        <Journal />
                    </Route>
                    <Route path="/relive">
                        <Relive />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

    function Home() {
        return <h2>Home</h2>;
    }

    function Journal() {
        return <h2>Journal</h2>;
    }

    function Relive() {
        return <h2>Relive</h2>;
    }
