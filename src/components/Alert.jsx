import React from "react";

export default function Alert(type, message) {
    var backgroundColor = '';
    var icon = '';
    if (type === 'warning') {
        backgroundColor = 'bg-yellow-dark';
        icon = 'fa-exclamation-triangle';
    }
    if (type === 'success') {
        backgroundColor = 'bg-green-dark';
        icon = 'fa-check';
    }
    if (type === 'info') {
        backgroundColor = 'bg-blue-dark';
        icon = 'fa-cog';
    }
    if (type === 'danger') {
        backgroundColor = 'bg-red-dark';
        icon = 'fa-times';
    }
    console.log('alert message:',message);

    return (
        <div className={`ml-3 mr-3 mb-4 alert alert-small rounded-0 ${backgroundColor}`} role="alert">
            <span><i className={`fa ${icon} color-white`}></i></span>
            <strong className="color-white">
                {/*{message.map(msg => {*/}
                {/*    console.log('msg:',msg);*/}
                {/*})}*/}
            </strong>
            <button type="button" className="close color-white opacity-60 font-16" data-dismiss="alert"
                    aria-label="Close">&times;</button>
        </div>
    )
}