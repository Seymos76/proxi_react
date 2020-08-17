import React from "react";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import { Link } from "react-router-dom";
import SEO from "../components/seo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faVideo, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import IntlContext from "../context/IntlContext";

const SecurityPage = () => {
    return (
        <DuoDrawerLayout lightTheme={false}>
            <IntlContext.Consumer>
                {({ translations, locale }) => (
                    <div className="content-no-image">
                        <SEO title={translations.START.SLIDE2.TITLE} lang={locale} />
                        <h1>{translations.START.SLIDE2.TITLE.toUpperCase()}</h1>

                        <div className="content">
                            <div className="list-group list-boxes">
                                <SecurityBox icon={faVideo} text={translations.START.SLIDE2.LINE1}/>
                                <SecurityBox icon={faMicrophone} text={translations.START.SLIDE2.LINE2}/>
                            </div>
                        </div>

                        <Link to='/visit/1'
                              className="btn btn-l bg-highlight btn-center-auto btn-icon shadow-l font-900 text-uppercase">
                            {translations.START.SLIDE2.GOTOVISIT}
                        </Link>
                    </div>
                )}
            </IntlContext.Consumer>
        </DuoDrawerLayout>
    )
}

const SecurityBox = ({ icon, text }) => {
    return (
        <div className="box rounded-s shadow-s">
            <FontAwesomeIcon icon={icon} style={{ fontSize: `2.3em` }}/>
            <strong style={{ fontSize: `1.4em`, lineHeight: `1.5em`, marginLeft: `20px` }}>{text}</strong>
        </div>
    )
}

export default SecurityPage