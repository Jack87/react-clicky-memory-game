import React from "react";

const Nav = props => (
    <nav className="navbar">
        <ul className="row">
            <li className="brand col-4"><a href="#">StarCraft 2 Units: Clicky Game</a></li>
            <li className={props.class}>{props.stateMsg}</li>
            <li className="col-4">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;
