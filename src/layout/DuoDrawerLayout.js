import React, {useState, Fragment} from "react";
import PropTypes from "prop-types";
import {Link, useLocation, useRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons';
import IntlContext from "../context/IntlContext";
import '../assets/scss/bootstrap.scss';
import '../assets/scss/style.scss';
import FooterBar from "../components/FooterBar";
import HeaderBar from "../components/HeaderBar";

window.addEventListener('DOMContentLoaded', () => {
    // var loader = document.getElementById('loader');
    if (process.env.REACT_APP_ENV !== 'production') {
        console.log('development environment');
    } else {
        console.log('production environment');
    }
});

const isProd = process.env.REACT_APP_ENV === 'production'

function DuoDrawerLayout({ children, isHome, lightTheme, noHeader }, props) {
    const [socialMenu, setSocialMenu] = useState(false);
    const [navigationMenu, setNavigationMenu] = useState(false);

    const toggleSocialMenu = () => {
        setSocialMenu(!socialMenu);
    }

    const toggleNavigationMenu = () => {
        setNavigationMenu(!navigationMenu);
    }

    const cityLocation = localStorage.getItem('selectedCityName') ? localStorage.getItem('selectedCityName') : '';

    return (
        <IntlContext.Consumer>
            {({ locale }) => (
               <>
                   <div id="page">
                       {/*{*/}
                       {/*    isHome && <div className="header header-fixed header-logo-app">*/}
                       {/*        <Link to={`/`} className="header-title color-white">*/}
                       {/*            <FontAwesomeIcon icon={faHome}/>*/}
                       {/*            {cityLocation}*/}
                       {/*        </Link>*/}
                       {/*    </div>*/}
                       {/*}*/}
                       {
                           isHome
                               ? <Fragment></Fragment>
                               : <HeaderBar
                                   cityLocation={cityLocation}
                                   navigationMenu={navigationMenu}
                                   socialMenu={socialMenu}
                                   toggleNavigationMenu={toggleNavigationMenu}
                                   toggleSocialMenu={toggleSocialMenu}
                               />
                       }
                       <div className={lightTheme ? `page-content-light` : `page-content`}>
                           {children}
                           {!isHome && <FooterBar/>}
                       </div>
                   </div>
                   {isProd && <div id="loader" className="hidden">
                       <div className="lds-dual-ring"></div>
                       <p>
                           Patientez pendant le chargement de l'application qui peut durer environ 2 minutes, suivant la
                           qualité de votre connexion.
                       </p>
                   </div>}
               </>
            )}
        </IntlContext.Consumer>
    )
}

DuoDrawerLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DuoDrawerLayout
