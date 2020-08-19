import React, {useState} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons';
import IntlContext from "../context/IntlContext";
import '../assets/scss/bootstrap.scss';
import '../assets/scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    // var loader = document.getElementById('loader');
    if (process.env.REACT_APP_ENV !== 'production') {
        console.log('development environment');
    } else {
        console.log('production environment');
    }
});

const isProd = process.env.REACT_APP_ENV === 'production'

function DuoDrawerLayout({ children, isHome, lightTheme }) {
    const [socialMenu, setSocialMenu] = useState(false);
    const [navigationMenu, setNavigationMenu] = useState(false);

    const toggleSocialMenu = () => {
        setSocialMenu(!socialMenu);
    }

    const toggleNavigationMenu = () => {
        setNavigationMenu(!navigationMenu);
    }

    return (
        <IntlContext.Consumer>
            {({ locale }) => (
               <>
                   <div id="page">
                       {
                           isHome && <div className="header header-fixed header-logo-app">
                               <Link to={`/`} className="header-title color-white">
                                   <FontAwesomeIcon icon={faHome}/> {window.location.pathname.toUpperCase().substring(1,window.location.pathname.length)}
                               </Link>
                           </div>
                       }
                       {/*<div className="header header-fixed header-logo-none">*/}
                       {/*    <Link to={`/`} className="header-search color-white">*/}
                       {/*        <FontAwesomeIcon icon={faSearchLocation}/> {window.location.pathname.toUpperCase().substring(1,window.location.pathname.length)}*/}
                       {/*    </Link>*/}
                       {/*    <button className={'header-icon color-white activity-button'}>*/}
                       {/*        Toutes les activités*/}
                       {/*        <span>*/}
                       {/*            <FontAwesomeIcon icon={faBorderAll} style={{*/}
                       {/*                fontSize: '1.3rem',*/}
                       {/*            }}/>*/}
                       {/*        </span>*/}
                       {/*    </button>*/}
                       {/*</div>*/}
                       <div className="header header-fixed header-demo header-logo-app mb-3 shadow-l">
                           <Link to="/" className="header-title header-subtitle">{window.location.pathname.toUpperCase().substring(1,window.location.pathname.length)} {locale}</Link>
                           <Link to="/" className="header-icon header-icon-1"><i className="fas fa-bars"></i></Link>

                           <div id="header-icon-2-group">
                               <button type="button" id="header-2" onClick={toggleSocialMenu} className="header-icon header-icon-2">
                                   <i className="fas fa-share-alt"></i>
                                   <span className="badge bg-green1-dark">3</span>
                               </button>
                               {socialMenu && <SocialDropdownMenu show={socialMenu}/>}
                           </div>
                           <div id="header-icon-3-group">
                               <button type="button" id="header-3" onClick={toggleNavigationMenu} className="header-icon header-icon-3">
                                   <i className="fas fa-bars"></i>
                                   <span className="badge bg-highlight">7</span>
                               </button>
                               {navigationMenu && <NavigationDropdownMenu show={navigationMenu}/>}
                           </div>
                       </div>

                       <div className={lightTheme ? `page-content-light` : `page-content`}>
                           {children}
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

function SocialDropdownMenu({ show }) {
    return (
        <div className={`dropdown-menu bg-theme border-0 shadow-l rounded-s mr-2 mt-2 ${show && 'show'}`}
             aria-labelledby="header-2">
            <p className="font-10 pl-3 pr-3 font-500 mb-0">Tap to Share - Off in Demo</p>
            <div className="divider mb-0"></div>
            <div className="list-group list-custom-small pl-2 pr-3">
                <a href="#">
                    <i className="fab font-18 fa-facebook-square color-facebook"></i>
                    <span>Facebook</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fab font-18 fa-twitter-square color-twitter"></i>
                    <span>Twitter</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#" className="border-0">
                    <i className="fab font-18 fa-whatsapp-square color-whatsapp"></i>
                    <span>WhatsApp</span>
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}

function NavigationDropdownMenu({ show }) {
    return (
        <div className={`dropdown-menu bg-theme border-0 shadow-l rounded-s mr-2 mt-2 ${show && 'show'}`}
             aria-labelledby="header-3">
            <p className="font-10 pl-3 pr-3 font-500 mb-0">Toutes les activités</p>
            <div className="divider mb-0"></div>
            <div className="list-group list-custom-small pl-2 pr-3">
                <a href="#">
                    <i className="fa font-14 fa-home color-blue-dark"></i>
                    <span>Home</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-14 fa-cog color-gray-dark"></i>
                    <span>Features</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-14 fa-file color-green-dark"></i>
                    <span>Pages</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-14 fa-mobile color-dark-dark"></i>
                    <span>Appstyle</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-14 fa-camera color-brown-dark"></i>
                    <span>Galleries</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-14 fa-image color-red-dark"></i>
                    <span>Portfolios</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#" className="border-0">
                    <i className="fa font-14 fa-envelope color-blue-dark"></i>
                    <span>Contact Us</span>
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}

DuoDrawerLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DuoDrawerLayout
