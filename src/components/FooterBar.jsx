import React from "react";
import {Link} from "react-router-dom";

export default function FooterBar() {
    return (
        <div id="footer-bar" className="footer-bar-1 position-fixed mb-0 shadow-xl">
            <Link to='/commune/'><i className="fa fa-home"></i><span>Accueil</span></Link>
            <a href="#"><i className="fa fa-search"></i><span>Recherche</span></a>
            <a href="#"><i className="fa fa-star"></i><span>Favoris</span></a>
            <a href="#" className="active-nav"><i className="fa fa-heart"></i><span>Blog</span></a>
            <Link to="/profile">
                <i className="fa fa-user"></i>
                <span>Profil</span>
                {/*<em className="badge bg-highlight">3</em>*/}
            </Link>
        </div>
    )
}