import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import infiniteBg from '../assets/images/pictures/_bg-infinite.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function CityHomePage() {
    console.log('CityHomePage.jsx');

    const [businesses, setBusinesses] = useState([]);
    const [selectedCity, setSelectedCity] = useState({
        id: localStorage.getItem('selectedCityId'),
        name: localStorage.getItem('selectedCityName'),
        zipCode: localStorage.getItem('selectedCityZipCode')
    });
    const [loading, setLoading] = useState(false);

    const getBusinesses = async (cityName) => {
        const url = window.location.pathname.toLowerCase().substring(1,window.location.pathname.length);
        console.log('url:',url);
        return await axios.get(`http://localhost:8000/api/business/by-city?search=${cityName}`)
            .then(response => {
                console.log('response:',response);
                return response.data;
            })
            .catch(error => {
                console.log('error:',error);
            })
            .finally(() => {
                console.log('finally executes');
            })
    }

    const getCityNameFromUrl = () => {
        const url = window.location.pathname.toLowerCase().substring(1,window.location.pathname.length);
        console.log('url:',url);
        if (url.match(/\//)) {
            console.log('matches');
            const charPosition = url.indexOf('/');
            return url.substring(charPosition + 1,url.length);
        } else {
            console.log('no match');
        }
    }

    useEffect(() => {
        async function fetchBusinesses() {
            const cityName = getCityNameFromUrl();
            const result = await getBusinesses(cityName);
            console.log('result:',result);
            setBusinesses(result);
            setLoading(false);
        }
        setLoading(true);
        fetchBusinesses();
    }, []);

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

                {businesses && businesses.map(business => {
                    console.log('slug:',business.slug);
                    return (
                        <Link to={`/boutique/${business.slug}`} className="card card-style rounded-10" data-card-height="350" data-slug={business.slug}>
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
                                <p className="text-left color-black opacity-80 font-12">{business.name}</p>
                                <p className="text-left color-black opacity-80 font-10">{business.address}</p>
                                <p className="text-left color-black opacity-80 font-10">{selectedCity.zipCode} {selectedCity.name}</p>
                                <span className={"card-star"}>
                                    <FontAwesomeIcon icon={faStar}/>
                                </span>
                            </div>
                            <div className="card-overlay bg-black rounded-0 opacity-70"></div>
                            <div className="card-overlay-infinite preload-img" style={{ backgroundImage: infiniteBg }}></div>
                        </Link>
                    )
                })}
            </div>
        </DuoDrawerLayout>
    )
}

export default CityHomePage;