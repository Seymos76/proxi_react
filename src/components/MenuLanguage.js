import React from "react";
import IntlContext from "../context/IntlContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const languageName = {
    fr: "Français",
    en: "English",
    nl: "Netherlands",
    es: "Spain"
}

function MenuLanguage({ toggleMenuLanguage }) {
    return (
        <IntlContext.Consumer>
            {({ switchLanguage, locale }) => (
                <section id="menuLanguage">
                    <div className="d-flex">
                        <div className="align-self-center">
                            <span className="color-black font-20">{ 'Language' }</span>
                        </div>
                        <div className="ml-auto align-self-center">
                            <button onClick={toggleMenuLanguage} className="menu-list close-menu icon icon-l mr-n2">
                                <FontAwesomeIcon icon={faTimes} className="color-red-dark font-20"/>
                            </button>
                        </div>
                    </div>
                    <div className="divider mb-0 mt-3"></div>
                    <div className="list-group list-custom-small ml-0 mr-1">
                        {Object.keys(languageName).map(lang => {
                            const image = require(`../assets/images/flags/${lang.toLowerCase()}.png`)
                            return (
                                <span
                                    key={lang}
                                    className={lang === locale ? 'active' : ''}
                                    onClick={() => switchLanguage({ language: lang })}
                                >
                                    <button className="menu-list">
                                        <img src={image} alt={languageName[lang]} />
                                        <span className="ml-2">{languageName[lang]}</span>
                                    </button>
                                </span>
                            )
                        })}
                    </div>
                </section>
            )}
        </IntlContext.Consumer>
    );
};

export default MenuLanguage