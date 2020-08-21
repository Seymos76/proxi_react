import React from "react";
import {Link} from "react-router-dom";

export default function NavigationDropdownMenu({ show, activities }) {
    console.log('activities:',activities);

    return (
        <div className={`dropdown-menu dropdown-menu-full bg-theme border-0 shadow-l rounded-s mr-2 mt-2 ${show && 'show'}`}
             aria-labelledby="header-3">
            <p className="font-10 pl-3 pr-3 color-black font-500 mb-0">Toutes les activités</p>
            <div className="divider mb-0"></div>
            <div className="list-group list-custom-small pl-2 pr-3">
                {activities && activities.map(activity => (
                    <Link to={`/activity/${activity.slug}`} key={activity.id}>
                        <i className="fa font-14 fa-home color-blue-dark"></i>
                        <span>{activity.name}</span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                ))}
            </div>
        </div>
    )
}