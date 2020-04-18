import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default class Social extends Component {
    btnArrowUp() {
        const btnArrowUp = document.querySelector(".notebook__arrow-up");

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="notebook" className="notebook">
                <div className="notebook__inner">
                    <div className="container container--notebook">
                        <img src="img/notebook/notebook-logo.png" alt="" className="notebook__logo" />
                        <div className="notebook__content">
                            <h2 className="notebook__title">Push yourself & your designs</h2>

                            <h3 className="notebook__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </h3>
                        </div>

                        <div className="notebook__device">
                            <img src="img/notebook/notebook-device.png" alt="" />
                        </div>
                    </div>

                    <button onClick={this.btnArrowUp} className="notebook__arrow-up">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faArrowUp} />
                    </button>
                </div>
            </section>
        );
    }
}
