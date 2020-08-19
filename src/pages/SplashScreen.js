import React from "react";
import {Link} from "react-router-dom";
import splashImg from "./../assets/images/splash/apple-touch-icon-152x152.png";
import './../assets/scss/pages/SplashScreen.scss';

function SplashScreen() {
    return (
        <section className="SplashScreen">
            <div className="Splash_content">
                <p>Découvrez les produits vendus autour de vous dans les commerces de proximité</p>
                <img src={splashImg} alt="splash image" height={150}/>
            </div>
            <div className="Splash_button">
                <Link className={"btn btn-primary btn-lg"} to={`/login`}>CONTINUER</Link>
            </div>
        </section>
    )
}

export default SplashScreen;