import React, { Component } from "react";

export default class IntroModal extends Component {
    modalWindowClose() {
        const modal = document.querySelector(".intro__modal");

        modal.style.display = "none";
    }

    render() {
        return (
            <div className="intro__modal">
                <div className="modal__title">Registration</div>
                <form action="" className="modal__form-registration">
                    <input type="text" placeholder="Enter your name" />
                    <input type="password" placeholder="Make a password " />
                    <button className="modal__btn-registration">Registration</button>
                </form>
                <button onClick={this.modalWindowClose} className="intro__modal-close">
                    Exit
                </button>
            </div>
        );
    }
}
