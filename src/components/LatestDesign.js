import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

export default class LatestDesign extends Component {
    handleClick() {
        const latestDesign = document.querySelector(".latest-design");
        const featuresApp = document.querySelector(".features-app");
        window.scrollTo(0, latestDesign.scrollHeight + featuresApp.scrollHeight);
    }
    render() {
        return (
            <section className="latest-design">
                <div className="container container--latest-design">
                    <div className="latest-design__header">
                        <h2 className="latest-design__title">Latest Design Stye</h2>

                        <h3 className="latest-design__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>

                    <img src="img/latest-design/smartphone.png" alt="" className="latest-design__img" />
                    <button onClick={this.handleClick} className="latest-design__arrow-down">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleDown} />
                    </button>
                </div>
            </section>
        );
    }
}
