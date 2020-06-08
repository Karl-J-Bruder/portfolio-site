import React from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import Burger from "./burger";
import "../styles/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import layoutStyles from "./layout.module.scss";

const Layout = (props) => {
    const jumpToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <Burger />
            <Header />
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                <button onClick={jumpToTop} className={layoutStyles.scrollToTop}><span className={layoutStyles.arrowUp}><FontAwesomeIcon icon={faChevronUp} /></span></button>
                <Footer />
            </div>
        </div>
    )
};

export default Layout;