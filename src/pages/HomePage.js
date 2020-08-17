import React, {Fragment} from "react"
import SEO from "../components/seo";
import { Link } from "react-router-dom";
import IntlContext from "../context/IntlContext";
import splash from "../assets/images/logo_grottes_cerdon.png";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import Bowser from "bowser";
import {faDirections, faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HomePage() {
    const { engine } = Bowser.getParser(window.navigator.userAgent).getResult();
    const browserEngine = engine.name;
    const isFirefox = browserEngine !== "WebKit" && browserEngine !== "Blink" && browserEngine === "Gecko";

    return (
        <DuoDrawerLayout isHome={true}>
            <IntlContext.Consumer>
                {({ translations, locale }) => (
                    <Fragment>
                        <SEO title={translations.SEO.WELCOME} lang={locale} />
                        <div data-card-height="story-card" className="card bg-17">
                            <div className="card-center text-center">
                                <h1 className="bolder font-30 mb-n2">
                                    <span className="font-20 color-white">{translations.START.SLIDE1.WELCOME_MESSAGE}</span><br/>{translations.START.SLIDE1.LOCATION}
                                </h1>
                                <div className="mt-5 mb-5">
                                    <img src={splash} alt="splash" height={80}/>
                                </div>
                                <Link to='/security/'
                                   className="btn btn-lg bg-highlight btn-center-auto btn-icon shadow-l font-900 text-uppercase">
                                    <FontAwesomeIcon icon={faDirections} />
                                    {translations.MENU.VISIT}
                                </Link>
                                {isFirefox && <p className="install-info">Pour une meilleure expérience utilisateur, veuillez ouvrir ce guide avec le navigateur Chrome.</p>}
                                <button id="installButton" type="button" className="hidden">
                                    <FontAwesomeIcon icon={faDownload} className="mr-3" />
                                    Installer
                                </button>
                            </div>
                            <div className="card-overlay card-overlay-infinite bg-black opacity-90"></div>
                        </div>
                    </Fragment>
                )}
            </IntlContext.Consumer>
        </DuoDrawerLayout>
    )
}

export default HomePage