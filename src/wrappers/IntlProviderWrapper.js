import React from "react";
import { IntlProvider } from "react-intl";
import { messages, language} from "../utils/translations";
import IntlContext from "../context/IntlContext";
import {Redirect} from "react-router-dom";

class IntlProviderWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			locale: language,
			translations: messages[language],
			defaultLocale: "fr",
			switchLanguage: this.switchLanguage
		}

		// this.switchLanguage = this.switchLanguage.bind(this);
	}

	switchLanguage = (language) => {
		this.setState({
			locale: language.language,
			translations: messages[language.language],
		});
		return <Redirect to={window.location.pathname}/>
	}

	render() {
		const { children } = this.props
		const { locale, translations, defaultLocale } = this.state
		return (
			<IntlContext.Provider value={this.state}>
				<IntlProvider
					key={locale}
					locale={locale}
					translations={translations}
					defaultLocale={defaultLocale}
					switchLanguage={this.switchLanguage}
				>
					{children}
				</IntlProvider>
			</IntlContext.Provider>
		)
	}
}

export default IntlProviderWrapper;