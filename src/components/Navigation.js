import React from 'react';
import LoginForm from './LoginForm';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="navBar">
                        <li className="navLink"><a >Home</a></li>
                        <li className="navLink"><a >News</a></li>
                        <li className="navLink"><a href >Services</a></li>
                        <li className="navLink"><a href >About</a></li>
                    </ul>
                </nav>
                <div className="login-div">
                    <LoginForm />
            </div>
            </div>

        )
    }
}