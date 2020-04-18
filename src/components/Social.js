import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default class Social extends Component {
    render() {
        return (
            <section className="social">
                <div className="container container--social">
                    <div className="social__inner">
                        <a href="https://twitter.com/home?lang=ru" target="_blank" className="social__link">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faTwitter} />
                            Tweet
                        </a>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="social__link social__link--facebook"
                        >
                            <FontAwesomeIcon className="font-awesome-icon" icon={faFacebookF} />
                            Share
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
