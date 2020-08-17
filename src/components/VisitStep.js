import React, { Suspense, useState, useEffect, useContext } from "react";
import Loader from "./loader";
import SEO from "./seo";
import Controls from "./controls";
import {openDB} from "idb";
import IntlContext from "../context/IntlContext";

const VisitStep = ({ step, hero, audio, map, prevStep, nextStep }) => {
	console.log('step:',step);
	const [data, setData] = useState({});
	const {locale, translations} = useContext(IntlContext);
	console.log('locale from visit step:',locale);
	console.log('current translations:',translations);

	useEffect(() => {
		asyncStepsGetter();
	}, []);

	const asyncStepsGetter = async () => {
		const db = await openDB('grottes_cerdon_offline',1);
		const store = await db.transaction('visit_steps','readwrite').objectStore('visit_steps');
		const id = `${locale}_${step}`;
		console.log('id:',id);
		const result = await store.index('by_key').get(id);
		if (result) {
			setData(result);
		}
	}

	console.log('data',data);
	return (
		<section className="visit-step">
			<SEO title={`Visite guidée`}/>
			<Suspense fallback={<Loader/>}>
				{
					step !== 2 &&
					<div className="hero-image" style={{ backgroundImage: `url(${hero})` }}>
					</div>
				}
				<div className="text-content">
					<h1>{data.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: data.description }}></div>
					{/*<FormattedHTMLMessage id={VISIT.STEPS.DESCRIPTION}/>*/}
				</div>
				{
					step !== 2 &&
					<div className="map-image">
						<img src={map} width={`100%`} alt={data.title}/>
					</div>
				}
				<Controls step={step} audio={audio} prevStep={prevStep} nextStep={nextStep}/>
			</Suspense>
		</section>
	)
}

export default VisitStep