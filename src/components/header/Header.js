import React, { Component } from "react";
import BurgerBtn from "./BurgerBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
    componentDidMount() {
        window.onscroll = function () {
            const header = document.querySelector(".header");
            const modalFixed = document.querySelector(".intro__modal");
            if (window.pageYOffset > 0) {
                header.classList.add("header--fixed");
                modalFixed.classList.add("intro__modal--fixed");
            } else {
                header.classList.remove("header--fixed");
                modalFixed.classList.remove("intro__modal--fixed");
            }
        };
    }

    modalWindowOpen() {
        const modal = document.querySelector(".intro__modal");

        modal.style.display = "block";
    }

    render() {
        return (
            <header className="header">
                <div className="container container--header">
                    <div className="header__inner">
                        <a href="#intro" className="header__logo">
                            <img alt="" src="img/header/header-logo.png" />
                        </a>

                        <nav className="header__nav">
                            <ul>
                                <li>
                                    <a className="nav__link" href="#features-app">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="nav__link" href="#our-design">
                                        Studio
                                    </a>
                                </li>
                                <li>
                                    <a className="nav__link" href="#notebook">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a className="nav__link" href="#footer">
                                        Blog
                                    </a>
                                </li>
                                <button onClick={this.modalWindowOpen} className="nav__link nav__link--join">
                                    Join
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleRight} />
                                </button>
                            </ul>
                        </nav>

                        <BurgerBtn />
                    </div>
                </div>
            </header>
        );
    }
}
