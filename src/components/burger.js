import React from 'react';
import burgerStyles from "./burger.module.scss";
import { Link } from "gatsby";

const Burger = () => {
    return (
        <div className={burgerStyles.nav}>
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" className={burgerStyles.toggleLabel} />
            <div className={burgerStyles.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
        </div>
    )
}

export default Burger;