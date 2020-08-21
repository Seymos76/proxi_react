import React from "react";

export default function SocialDropdownMenu({ show }) {
    return (
        <div className={`dropdown-menu bg-theme border-0 shadow-l rounded-s mr-2 mt-2 ${show && 'show'}`}
             aria-labelledby="header-2">
            <p className="font-10 pl-3 pr-3 color-black font-500 mb-0">Tap to Share - Off in Demo</p>
            <div className="divider mb-0"></div>
            <div className="list-group list-custom-small pl-2 pr-3">
                <a href="#">
                    <i className="fa font-18 fa-facebook-square color-facebook"></i>
                    <span>Facebook</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-18 fa-twitter-square color-twitter"></i>
                    <span>Twitter</span>
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="#">
                    <i className="fa font-18 fa-instagram color-instagram"></i>
                    <span>Instagram</span>
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}