import React, { Component } from "react";

export default class BurgerBtn extends Component {
    handleClick() {
        const burgerMenu = document.querySelector(".burger-menu");
        const navBar = document.querySelector(".header__nav");

        burgerMenu.classList.toggle("burger-menu--active");
        navBar.classList.toggle("header__nav--active");
    }
    render() {
        return (
            <button onClick={this.handleClick} className="header__toggle-button">
                <div className="burger-menu"></div>
            </button>
        );
    }
}
