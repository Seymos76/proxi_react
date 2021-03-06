import React, {Suspense, StrictMode} from 'react';
import ReactDOM from 'react-dom';
// import './initIndexedDB';
import { BrowserRouter, Route} from "react-router-dom";
import IntlProviderWrapper from "./wrappers/IntlProviderWrapper";
import {language, messages} from "./utils/translations";
// import Eruda from "eruda";
import HomePage from "./pages/HomePage";
import SecurityPage from "./pages/SecurityPage";
import VisitPage from "./pages/VisitPage";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from '@sentry/react';

// Eruda.init();
Sentry.init({dsn: "https://51d8dfc777ea479f8f1b1fff9bea42fd@o346982.ingest.sentry.io/5368022"});
window.addEventListener('DOMContentLoaded', () => {
	let displayMode = 'browser tab';
	if (navigator.standalone) {
		displayMode = 'standalone-ios';
	}
	if (window.matchMedia('(display-mode: standalone)').matches) {
		displayMode = 'standalone';
		document.getElementById('loader').classList.add('hidden');
	}
	// Log launch display mode to analytics
	console.log('DISPLAY_MODE_LAUNCH:', displayMode);
});

function AppRoot() {

	return (
		<IntlProviderWrapper
			locale={language}
			messages={messages[language]}
			defaultLocale={'fr'}
		>
			<StrictMode>
				<BrowserRouter>
					<Suspense fallback={<div>Loading...</div>}>
						<Route exact path='/' component={HomePage}/>
						<Route exact path='/security' component={SecurityPage}/>
						<Route exact path='/visit/:step?' component={VisitPage}/>
					</Suspense>
				</BrowserRouter>
			</StrictMode>
		</IntlProviderWrapper>
	)
}

ReactDOM.render(
	<AppRoot/>,
	document.getElementById('root')
);

serviceWorker.register();