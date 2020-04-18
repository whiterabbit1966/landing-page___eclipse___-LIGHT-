import React, { Component } from "react";
import IntroModal from "./IntroModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

export default class Intro extends Component {
    handleClick() {
        const latestDesign = document.querySelector(".latest-design");
        window.scrollTo(0, latestDesign.scrollHeight);
    }

    render() {
        return (
            <section id="intro" className="intro">
                <div className="container">
                    <IntroModal />
                    <div className="intro__inner">
                        <h1 className="intro__title">
                            Push yourself & your designs
                            <span className="intro__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </span>
                        </h1>
                    </div>

                    <form action="" className="intro__form">
                        <div className="form__select">
                            <select>
                                <option selected>Design Style</option>
                                <option>Landing Page</option>
                                <option>Make breakfast</option>
                                <option>Play</option>
                                <option>Programming</option>
                            </select>
                            <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleDown} />
                        </div>

                        <div className="form__input">
                            <input type="email" placeholder="Email" />
                            <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleRight} />
                        </div>

                        <button className="intro__button">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleRight} />
                        </button>
                    </form>
                    <button onClick={this.handleClick} className="intro__arrow-down">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleDown} />
                    </button>
                </div>

                <a href="#footer" className="intro__button-contact">
                    Contact Us
                </a>
            </section>
        );
    }
}
