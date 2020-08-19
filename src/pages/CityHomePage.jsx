import React from "react";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import infiniteBg from '../assets/images/pictures/_bg-infinite.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";

function CityHomePage() {
    console.log('page d\'accueil de la ville');
    return (
        <DuoDrawerLayout isHome={false}>
            <div className="content mb-0">
                <div className="row pb-2 pt-2 btn-categories">
                    <div className="col-4 pr-1">
                        <a href="#"
                           className="btn btn-border btn-s btn-full mb-3 rounded-0 text-uppercase font-900 border-red-dark color-red-dark bg-theme">Tout</a>
                    </div>
                    <div className="col-5 pl-1 pr-1">
                        <a href="#"
                           className="btn btn-border btn-s btn-full mb-3 rounded-sm text-uppercase font-900 border-green-dark color-green-dark bg-theme">Commerces</a>
                    </div>
                    <div className="col-4 pl-1">
                        <a href="#"
                           className="btn btn-border btn-s btn-full mb-3 rounded-xl text-uppercase font-900 border-blue-dark color-blue-dark bg-theme">Produits</a>
                    </div>
                    <div className="col-6 pl-1 pr-1">
                        <a href="#"
                           className="btn btn-border btn-s btn-full mb-3 rounded-sm text-uppercase font-900 border-green-dark color-green-dark bg-theme">Bons plans</a>
                    </div>
                    <div className="col-4 pl-1">
                        <a href="#"
                           className="btn btn-border btn-s btn-full mb-3 rounded-xl text-uppercase font-900 border-blue-dark color-blue-dark bg-theme">Photos</a>
                    </div>
                </div>

                <div className="card card-style rounded-10" data-card-height="350">
                    <div className="card-center">
                        <span className="card-heart">
                            <FontAwesomeIcon icon={faHeart} className={"color-black"}/>
                        </span>
                        {/*<h1 className="color-white text-center mb-0">Infinite Backgrounds</h1>*/}
                        {/*<p className="color-white text-center opacity-60 mt-n1 mb-0">An absolutely Gorgeous Effect to*/}
                        {/*    Have.</p>*/}
                        {/*<a href="#"*/}
                        {/*   className="btn btn-center-s btn-sm text-uppercase font-600 mt-4 bg-white color-black scale-box">Awesome</a>*/}
                    </div>
                    <div className="card-bottom">
                        <p className="text-left color-black opacity-80 font-12">PALAZZO</p>
                        <p className="text-left color-black opacity-80 font-10">148 Rue de Paris</p>
                        <p className="text-left color-black opacity-80 font-10">59000 Lille</p>
                        <span className={"card-star"}>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                    </div>
                    <div className="card-overlay bg-black rounded-0 opacity-70"></div>
                    <div className="card-overlay-infinite preload-img" style={{ backgroundImage: infiniteBg }}></div>
                </div>
            </div>
        </DuoDrawerLayout>
    )
}

export default CityHomePage;