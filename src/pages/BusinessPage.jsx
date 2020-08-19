import React, {useEffect, useState} from "react";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import infiniteBg from "../assets/images/pictures/_bg-infinite.jpg";
import axios from "axios";

function BusinessPage() {
    console.log('BusinessPage.jsx');

    const [selectedBusiness, setSelectedBusiness] = useState({
        id: localStorage.getItem('selectedCityId'),
        name: localStorage.getItem('selectedCityName'),
        zipCode: localStorage.getItem('selectedCityZipCode')
    });

    const getBusiness = async (businessName) => {
        return await axios.get(`http://localhost:8000/api/business/by-slug?search=${businessName}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log('error:',error);
            })
            .finally(() => {
                console.log('finally executes');
            })
    }

    const getBusinessNameFromUrl = () => {
        const url = window.location.pathname.toLowerCase().substring(1,window.location.pathname.length);
        if (url.match(/\//)) {
            console.log('matches');
            const charPosition = url.indexOf('/');
            console.log('charPosition:',charPosition);
            return url.substring(charPosition + 1,url.length);
        } else {
            console.log('no match');
        }
    }

    useEffect(() => {
        const businessName = getBusinessNameFromUrl();
        async function fetchBusiness() {
            const business = await getBusiness(businessName);
            if (business.length) {
                setSelectedBusiness(business[0]);
            }
        }
        fetchBusiness();
    }, [])

    return (
        <DuoDrawerLayout noHeader={true}>
            {selectedBusiness && <div className="card card-style rounded-10" data-card-height="350" style={{
                backgroundImage: infiniteBg
            }}>
                <div className="card-center">
                    <span className="card-arrow">
                        <FontAwesomeIcon icon={faArrowLeft} className={"color-white"}/>
                    </span>
                    <span className="card-heart">
                        <FontAwesomeIcon icon={faHeart} className={"color-white"}/>
                    </span>
                    {/*<h1 className="color-white text-center mb-0">Infinite Backgrounds</h1>*/}
                    {/*<p className="color-white text-center opacity-60 mt-n1 mb-0">An absolutely Gorgeous Effect to*/}
                    {/*    Have.</p>*/}
                    {/*<a href="#"*/}
                    {/*   className="btn btn-center-s btn-sm text-uppercase font-600 mt-4 bg-white color-black scale-box">Awesome</a>*/}
                </div>
                <div className="card-bottom">
                    <p className="text-left color-black opacity-80 font-12">{selectedBusiness.name}</p>
                    <p className="text-left color-black opacity-80 font-10">{selectedBusiness.address}</p>
                    <p className="text-left color-black opacity-80 font-10">{selectedBusiness.zipCode} {selectedBusiness.name}</p>
                    <span className={"card-star"}>
                        <FontAwesomeIcon icon={faStar}/>
                    </span>
                </div>
                <div className="card-overlay bg-black rounded-0 opacity-70"></div>
                <div className="card-overlay-infinite preload-img" style={{ backgroundImage: infiniteBg }}></div>
            </div>}
        </DuoDrawerLayout>
    )
}

export default BusinessPage;