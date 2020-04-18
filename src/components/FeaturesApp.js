import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

export default class FeaturesApp extends Component {
    handleClick() {
        const latestDesign = document.querySelector(".latest-design");
        const featuresApp = document.querySelector(".features-app");
        const ourDesign = document.querySelector(".our-design");
        window.scrollTo(0, latestDesign.scrollHeight + featuresApp.scrollHeight + ourDesign.scrollHeight);
    }
    render() {
        return (
            <section id="features-app" className="features-app">
                <div className="container container--features-app">
                    <div className="features-app__header">
                        <h2 class="features-app__title">Features of app</h2>

                        <h3 className="features-app__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>

                    <div className="features-app__inner">
                        <div className="features-app__item features-app__item--top-one">
                            <img src="img/features-app/app-1.png" alt="" className="item__icon" />
                            <div className="item__title">Lorem ipsum dol or sit</div>

                            <div className="item__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </div>
                        </div>

                        <div className="features-app__item features-app__item--top-two">
                            <img src="img/features-app/app-2.png" alt="" className="item__icon" />
                            <div className="item__title">Ametconsectetur</div>

                            <div className="item__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna.
                            </div>
                        </div>

                        <div className="features-app__item features-app__item--bot-three">
                            <img src="img/features-app/app-3.png" alt="" className="item__icon" />
                            <div className="item__title">Lorem ipsum dol or sit</div>

                            <div className="item__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </div>
                        </div>

                        <div className="features-app__item features-app__item--bot-four">
                            <img src="img/features-app/app-4.png" alt="" className="item__icon" />
                            <div className="item__title">Lorem ipsum dol or sit</div>

                            <div className="item__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>

                    <button onClick={this.handleClick} className="features-app__arrow-down">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faArrowCircleDown} />
                    </button>
                </div>
            </section>
        );
    }
}
