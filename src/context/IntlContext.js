import React from "react";
import { messages, language} from "../utils/translations";

const IntlContext = React.createContext({
    locale: 'fr',
    defaultLocale: 'fr',
    translations: messages[language],
    switchLanguage: (value) => {}
});

export default IntlContext;