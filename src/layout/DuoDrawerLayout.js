import React, {useState} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBorderAll, faFlag, faHome, faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import IntlContext from "../context/IntlContext";
import MenuLanguage from "../components/MenuLanguage";
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
    const [toggled, setToggled] = useState(false);

    const toggleMenuLanguage = () => {
        setToggled(prevState => !prevState);
    }

    return (
        <IntlContext.Consumer>
            {({ locale }) => (
               <>
                   <div id="page">
                       {
                           isHome && <div className="header header-fixed header-logo-app">
                               <Link to={`/`} className="header-title color-white">
                                   <FontAwesomeIcon icon={faHome}/> MENU
                               </Link>
                               <button onClick={toggleMenuLanguage} data-menu="menu-language" className="header-icon color-white header-icon-4">
                                   <FontAwesomeIcon icon={faFlag} /> {locale.toUpperCase()}
                               </button>
                           </div>
                       }
                       <div className="header header-fixed header-logo-none">
                           <Link to={`/`} className="header-search color-white">
                               <FontAwesomeIcon icon={faSearchLocation}/> {window.location.pathname.toUpperCase().substring(1,window.location.pathname.length)}
                           </Link>
                           <button className={'header-icon color-white activity-button'}>
                               Toutes les activités
                               <span>
                                   <FontAwesomeIcon icon={faBorderAll} style={{
                                       fontSize: '1.3rem',
                                   }}/>
                               </span>
                           </button>
                           {/*<button onClick={toggleMenuLanguage} data-menu="menu-language" className="header-icon color-white header-icon-4">*/}
                           {/*    <FontAwesomeIcon icon={faFlag} /> {locale.toUpperCase()}*/}
                           {/*</button>*/}
                       </div>

                       <div className={lightTheme ? `page-content-light` : `page-content`}>
                           {children}
                       </div>
                       {toggled && <MenuLanguage toggleMenuLanguage={toggleMenuLanguage}/>}
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
