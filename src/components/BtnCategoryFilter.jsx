import React from "react";

export default function BtnCategoryFilter({ handleFilter, filter, label}) {
    return (
        <button
            className="btn btn-border btn-s btn-full mb-3 rounded-0 text-uppercase font-900 border-red-dark color-red-dark bg-theme"
            onClick={handleFilter(filter)}
        >{label}</button>
    )
}