import React, {useState, useEffect, useContext, Suspense} from "react";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import IntlContext from "../context/IntlContext";
import {openDB} from "idb";
import Loader from "../components/loader";
import Controls from "../components/controls";
import {INDEXED_DB_VERSION_DEV, INDEXED_DB_VERSION_PROD} from "../utils/connexion";

function VisitPage() {
    let pathname = window.location.pathname;
    let step = parseInt(pathname.slice(7,pathname.length));
    const [data, setData] = useState({});
    const [media, setMedia] = useState({});
    const {locale} = useContext(IntlContext);

    useEffect(() => {
        scrollToTop();
        async function loadStep() {
            await loadContent();
            await loadMedia();
        }
        loadStep();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step]);

    const scrollToTop = () => {
        setTimeout(
            () => window.scrollTo(0,0),
            0
        );
    }

    const loadContent = async () => {
        let contentDB;
        if (process.env.REACT_APP_ENV !== 'production') {
            contentDB = await openDB('grottes_cerdon_offline',INDEXED_DB_VERSION_DEV);
        } else {
            contentDB = await openDB('grottes_cerdon_offline',INDEXED_DB_VERSION_PROD);
        }
        const store = await contentDB
            .transaction('visit_steps','readwrite')
            .objectStore('visit_steps');
        const stepId = getStepId();
        const result = await store.index('by_key').get(stepId);
        if (result) {
            setData(result);
        }
    }

    const loadMedia = async () => {
        let mediaDB;
        if (process.env.REACT_APP_ENV !== 'production') {
            mediaDB = await openDB('grottes_cerdon_offline',INDEXED_DB_VERSION_DEV);
        } else {
            mediaDB = await openDB('grottes_cerdon_offline',INDEXED_DB_VERSION_PROD);
        }
        const store = await mediaDB
            .transaction('audio','readwrite')
            .objectStore('audio');
        const mediaId = getMediaId();
        const result = await store.index('by_key').get(mediaId);
        if (result) {
            setMedia(result);
        }
    }

    const getStepId = () => {
        if (step === 1) {
            return `${locale}_1`;
        } else if (step === 2) {
            return `${locale}_!`;
        } else {
            return `${locale}_${step-1}`;
        }
    }

    const getMediaId = () => {
        if (step === 1) {
            return `1_${locale.toUpperCase()}`;
        } else {
            return `${step-1}_${locale.toUpperCase()}`;
        }
    }

    return (
        <DuoDrawerLayout lightTheme={false}>
            <Suspense fallback={<Loader/>}>
                {data.image && <div
                    className="card-style ml-0 mr-0 rounded-0"
                    style={{
                        backgroundImage: `url(${data.image})`,
                        minHeight: `30vh`
                    }}
                >
                    <div className="content">
                    </div>
                </div>}
                {
                    (data.title && data.description) &&
                    <div className={data.image ? `content-step` : 'content-no-image'}>
                        <h1>
                            <span dangerouslySetInnerHTML={{ __html: data.title }} style={{ textTransform: `uppercase` }}></span>
                            {
                                step < 2 && <span>
                                    <br/>
                                    <span className="badge pr-1 rounded-xl font-600" style={{ backgroundColor: `#03aeca`, color: `white` }}>{step}</span>
                                </span>
                            }
                            {
                                step > 2 && <span>
                                    <br/>
                                    <span className="badge pr-1 rounded-xl font-600" style={{ backgroundColor: `#03aeca`, color: `white` }}>{step - 1}</span>
                                </span>
                            }
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </div>
                }
                {data.map && <div className="card-style card-map ml-0 mr-0 rounded-0">
                    <img src={data.map} width={`100%`} alt={data.title}/>
                </div>}
                <Controls step={step} audio={media} />
            </Suspense>
        </DuoDrawerLayout>
    )
}

export default VisitPage;