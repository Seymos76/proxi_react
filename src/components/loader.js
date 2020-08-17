import React from "react"

const Loader = () => {
    return (
        <div id="loader" className="hidden">
            <div className="lds-dual-ring"></div>
            <p>
                Veuillez patienter pendant le chargement...
            </p>
        </div>
    )
}

export default Loader