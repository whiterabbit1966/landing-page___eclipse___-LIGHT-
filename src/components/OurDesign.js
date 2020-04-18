import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default class OurDesign extends Component {
    handleClick() {
        const ourDesign = document.querySelector(".our-design");
        window.scrollTo(0, ourDesign.scrollHeight);
    }

    btnOurDesignDev() {
        const dev = document.querySelector(".our-design__inner--dev");
        const design = document.querySelector(".our-design__inner--design");
        const business = document.querySelector(".our-design__inner--business");
        const arts = document.querySelector(".our-design__inner--arts");

        dev.style.display = "flex";

        design.style.display = "none";
        business.style.display = "none";
        arts.style.display = "none";
    }

    btnOurDesignDesign() {
        const dev = document.querySelector(".our-design__inner--dev");
        const design = document.querySelector(".our-design__inner--design");
        const business = document.querySelector(".our-design__inner--business");
        const arts = document.querySelector(".our-design__inner--arts");

        design.style.display = "flex";

        dev.style.display = "none";
        business.style.display = "none";
        arts.style.display = "none";
    }

    btnOurDesignBusiness() {
        const dev = document.querySelector(".our-design__inner--dev");
        const design = document.querySelector(".our-design__inner--design");
        const business = document.querySelector(".our-design__inner--business");
        const arts = document.querySelector(".our-design__inner--arts");

        business.style.display = "flex";

        dev.style.display = "none";
        design.style.display = "none";
        arts.style.display = "none";
    }

    btnOurDesignArts() {
        const dev = document.querySelector(".our-design__inner--dev");
        const design = document.querySelector(".our-design__inner--design");
        const business = document.querySelector(".our-design__inner--business");
        const arts = document.querySelector(".our-design__inner--arts");

        arts.style.display = "flex";

        dev.style.display = "none";
        design.style.display = "none";
        business.style.display = "none";
    }

    render() {
        return (
            <section id="our-design" className="our-design">
                <div className="container">
                    <div className="our-design__header">
                        <h2 className="our-design__title">Our design guidelines</h2>

                        <h3 className="our-design__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                        </h3>
                    </div>

                    <div class="our-design__filter">
                        <button
                            onClick={this.btnOurDesignDev}
                            href="#"
                            className="our-design__btn our-design__btn--dev"
                        >
                            Development
                        </button>
                        <button
                            onClick={this.btnOurDesignDesign}
                            href="#"
                            className="our-design__btn our-design__btn--design"
                        >
                            Design
                        </button>
                        <button
                            onClick={this.btnOurDesignBusiness}
                            href="#"
                            className="our-design__btn our-design__btn--business"
                        >
                            Business
                        </button>
                        <button
                            onClick={this.btnOurDesignArts}
                            href="#"
                            className="our-design__btn our-design__btn--arts"
                        >
                            Arts
                        </button>
                    </div>

                    <div className="our-design__inner our-design__inner--dev">
                        <div className="our-design__item our-design__item--top">
                            <img src="img/our-design/our-design-one.png" alt="" className="item__img" />
                            <div className="item__name">
                                Our develop
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-two.png" alt="" className="item__img" />
                            <div className="item__name">
                                Our develop
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-three.png" alt="" className="item__img" />
                            <div className="item__name">
                                Our develop
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="our-design__inner our-design__inner--design">
                        <div className="our-design__item our-design__item--top">
                            <img src="img/our-design/our-design-one.png" alt="" className="item__img" />
                            <div className="item__name">
                                Design listing one
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-two.png" alt="" className="item__img" />
                            <div className="item__name">
                                Design listing one
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-three.png" alt="" className="item__img" />
                            <div className="item__name">
                                Design listing one
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="our-design__inner our-design__inner--business">
                        <div className="our-design__item our-design__item--top">
                            <img src="img/our-design/our-design-one.png" alt="" className="item__img" />
                            <div className="item__name">
                                Business
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-two.png" alt="" className="item__img" />
                            <div className="item__name">
                                Business
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-three.png" alt="" className="item__img" />
                            <div className="item__name">
                                Business
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="our-design__inner our-design__inner--arts">
                        <div className="our-design__item our-design__item--top">
                            <img src="img/our-design/our-design-one.png" alt="" className="item__img" />
                            <div className="item__name">
                                Arts
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-two.png" alt="" className="item__img" />
                            <div className="item__name">
                                Arts
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>

                        <div className="our-design__item">
                            <img src="img/our-design/our-design-three.png" alt="" className="item__img" />
                            <div className="item__name">
                                Arts
                                <span className="item__name__arrow">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faChevronRight} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
