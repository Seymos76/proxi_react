import React, {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NavigationDropdownMenu from "./NavigationDropdownMenu";
import SocialDropdownMenu from "./SocialDropdownMenu";
import axios from "axios";

export default function HeaderBar({ cityLocation, toggleSocialMenu, socialMenu, toggleNavigationMenu, navigationMenu }) {
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        return await axios.get(`http://localhost:8000/api/business-categories`)
            .then(response => {
                console.log('activities response:',response)
                return response.data;
            })
            .catch(err => {
                console.log('err:',err.message);
            })
            .finally(() => {
                console.log('finally executes');
            })
    }

    useEffect(() => {
        async function fetchActivities() {
            const activities = await getActivities();
            console.log('activities fetched:',activities);
            setActivities(activities);
        }
        fetchActivities();
    }, []);

    return (
        <Fragment>
            <div className="header header-demo header-logo-app shadow-l">
                <Link to="/" className="header-title header-subtitle pl-2">{cityLocation}</Link>
                <a href="#" className="header-icon header-icon-1">
                    <i className="fa fa-arrow-left"></i></a>

                <div id="header-icon-2-group">
                    <button type="button" id="header-2" onClick={toggleSocialMenu} data-toggle="dropdown" className="header-icon header-icon-2">
                        <i className="fa fa-share-alt"></i>
                    </button>
                    {socialMenu && <SocialDropdownMenu show={socialMenu}/>}
                </div>
                <div id="header-icon-3-group">
                    <button type="button" id="header-3" onClick={toggleNavigationMenu} className="header-icon header-icon-3">
                        <i className="fa fa-bars"></i>
                    </button>
                    {navigationMenu && <NavigationDropdownMenu activities={activities} show={navigationMenu}/>}
                </div>
            </div>
        </Fragment>
    )
}