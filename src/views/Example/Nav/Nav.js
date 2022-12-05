import React from "react";
import './Nav.scss';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <div>
                <div class="topnav">
                    <NavLink to="/" activeClassName="selected">Home</NavLink>
                    <NavLink to="/todo" activeClassName="selected">Todos</NavLink>
                    <NavLink to="/components" activeClassName="selected">Components</NavLink>
                    <NavLink to="/users" activeClassName="selected">Users</NavLink>
                </div>
            </div>

        )
    }
}
export default Nav