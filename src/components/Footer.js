import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container container--footer">
                    <div className="footer__inner">
                        <div className="footer__column-one">
                            <a href="#" className="footer__link footer__link--top">
                                Abous us
                            </a>
                            <a href="#" className="footer__link">
                                Support
                            </a>
                            <a href="#" className="footer__link">
                                Why buy
                            </a>
                            <a href="#" className="footer__link">
                                Affiliates
                            </a>
                        </div>
                        <div className="footer__column-two">
                            <a href="#" className="footer__link footer__link--top">
                                Contact Us
                            </a>
                            <a href="#" className="footer__link">
                                Returns
                            </a>
                        </div>
                    </div>

                    <div className="footer__rights">
                        Made in Melbourne By BlazRobar.com @BlazRobar
                        <br />
                        <span className="footer__rights--date">Copyright © 2016, Cool stuff here</span>
                    </div>
                </div>
                <span className="footer__addition">Lorem ipsum dolor sit amet consectetur adipisicing</span>
            </footer>
        );
    }
}
