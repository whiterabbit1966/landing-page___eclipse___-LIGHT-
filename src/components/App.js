import React, { Component } from "react";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import LatestDesign from "./LatestDesign";
import FeaturesApp from "./FeaturesApp";
import OurDesign from "./OurDesign";
import Notebook from "./Notebook";
import Social from "./Social";
import Footer from "./Footer";

// Import styles
import "../scss/index.scss";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
                <LatestDesign />
                <FeaturesApp />
                <OurDesign />
                <Notebook />
                <Social />
                <Footer />
            </div>
        );
    }
}
