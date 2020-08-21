import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import infiniteBg from "../assets/images/pictures/_bg-infinite.jpg";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";

export default function ProfilePage() {
    return (
        <DuoDrawerLayout isHome={false}>
            <div className="content mb-0">
                <div className="list-group list-custom-small list-icon-0">
                    <Link to={`profile/informations`} data-menu="menu-share">
                        <i className="fa fa-share-alt color-blue-dark"></i>
                        <span>Mes informations</span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                    <Link to={`profile/commandes`} data-menu="menu-share-thumbs">
                        <i className="fa fa-th color-green-dark"></i>
                        <span>Mes commandes</span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                    <Link to={`profile/avis`} data-menu="menu-call">
                        <i className="fa fa-phone color-phone"></i>
                        <span>Mes avis</span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                    <button className={"btn btn-danger btn-sm"} data-menu="menu-video">
                        {/*<i className="fab fa-sign-out color-red-dark"></i>*/}
                        <span>Déconnexion</span>
                        {/*<i className="fa fa-angle-right"></i>*/}
                    </button>
                </div>
            </div>
        </DuoDrawerLayout>
    )
}