import React from "react";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";

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
            </div>
        </DuoDrawerLayout>
    )
}

export default CityHomePage;